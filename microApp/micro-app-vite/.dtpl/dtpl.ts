// local interface file: /Users/ly/.vscode/extensions/qiu8310.dot-template-vscode-0.3.0/node_modules/dot-template-core/out/common/interface
import * as _ from 'dot-template-types'
import * as path from 'path'

/*
  注意：

    1. 虽然 ts 文件有很强的语法提示，但默认情况下 dot-template 并不支持，
       你需要把它编译成 js 文件并放在同目录下；不过 dot-template 也是可
       以支持处理 ts 文件的，需要你在当前项目中安装  `ts-node` 和
       `typescript` 组件。

    2. 在此脚本中使用 console 语句是不会输出在控制面板的，因为此脚本是在
       vscode 插件中执行的，插件的输出不在当前环境中；不过你可以设置配置
       项中的 dot-template-vscode.debug 为 true，并在此程序中执行：

       source.app.debug('...')

    3. 当 matches 是字符串时，可以只匹配 basename，但如果 matches 带
       路径时，就要从项目根路径开始匹配，否则无法匹配成功。(主要是是因为
       minimatch 的选项 matchBase 设置为 true 了，你可以用
       dot-template-vscode.minimatchOptions 来修改默认的配置)
 */

function baseCheck(source: _.Source) {
    // 非文件夹，不生成
    if (!source.isDirectory) {
        return false;
    }
    // 如果是小写开头的文件夹，不生成
    if (/^[a-z]/.test(source.basicData.rawModuleName)) {
        return false;
    }
    return true;
}
    

export default function(source: _.Source): _.IDtplConfig {
  return {
    templates: [
      {
        name: 'template/component',
        matches: function (_, source) {
            if (!baseCheck(source)) {
                return false
            }
            return true
        },
      },
      /**
       * =================  模板一 : 项目模板   =================
       *    当新建一个以 "-example" 结尾的文件夹时，会自
       *    动将 .dtpl/template/example 下的所有文件内
       *    容复制到你新建的文件夹内
       *
       *    另外，由于以 .dtpl 结尾的文件是模板文件，所以
       *    系统会用内部生成的数据和用户指定的数据去渲染模板，
       *    生成新的内容，然后去除模板文件的后缀，写入新的对应
       *    的文件内
       *
       *    支持的模板有： dtpl, ejs 和 nunjunk；对应的后缀名分别默认为： .dtpl, .ejs,  .njk
       */
      {
        name: 'template/example',   // 指定当前目录下的模板名称
        matches: '*-example',       // 匹配新建的文件夹的路径（使用了 minimatch 来匹配）

        // 过滤模板内的文件，主要功能有：
        //    * 删除掉指定的文件  ( 返回 false 即表示删除当前 target )
        //    * 返回新的文件内容  ( 返回 {content: '...'} )
        //    * 返回新的文件路径  ( 返回 {filePath: '...'}，如此例所示 )
        filter(target) {
          // template/example/config 目录下的文件需要到最外层去
          // 所以此处需要修改它的路径
          let dir = path.dirname(target.toPath)
          if (path.basename(dir) === 'config') {
            return {
              filePath: path.resolve(dir, '..', '..', target.name)
            }
          }
          return true
        },
        overwrite: false    // 如果有重名文件，是否覆盖它；不覆盖会新建一个 .backup 目录来存放原文件
      },
      // =======================      模板一 配置结束     =======================


      /**
       * =================  模板二 : 文件模板   =================
       *
       * 当在项目的 widget 目录下新建 tsx 文件时，会自动使用 template/widget.tsx.dtpl 来生成文件内容
       */
      {
        name: 'template/widget.tsx.dtpl',
        matches: '*-example/widget/**/*.tsx'
      },

      // =======================      模板二 配置结束     =======================



      /**
       * =================  模板三 : 创建关联文件，并生成其内容   =================
       */
      {
        name: 'template/page.tsx.dtpl',         // 模板文件的路径
        matches: '*-example/page/**/*.tsx',     // 匹配 example/page 下的所有后缀为 tsx 的文件
        /**
         * 创建和此 page 相关联的 样式文件
         *
         * 在同目录下的 style 文件夹下创建一个同名的 css 文件，并且在当前文件中插入 require('style/[name].css') 的引用
         */
        related(data) {
          let styleFile = `./style/${data.fileName}.css`
          return {
            relativePath: styleFile,                // 指定要新建文件的路径
            reference: `require('${styleFile}')`,   // 要给 tsx 文件插入的引用
            // 自动插入引用在合适的地方，此配置只适用于 js/ts 文件对样式文件的引用
            // 如果是其它引用形式，可以通过指定 begin 和 end 坐标来插入到合适的地方
            smartInsertStyle: true
          }
        }
      },

      // 给样式文件指定模板，这样当它被创建时，会使用此模板
      {
        name: 'template/page.css.dtpl',
        matches: '*-example/page/**/*.css'
      }
      // =======================      模板三 配置结束     =======================
    ],

    /**
     * 生成自定义的数据，在渲染模板时会使用，模板总共会从三处获取数据
     *
     *  1. 系统提供的文件本身的 basicData ，参考： https://github.com/qiu8310/dot-template#environment
     *  2. 用户配置的只有指定的模板才能用的 localData，可以在 templates 中的对象中配置
     *  3. 用户配置的所有模板都可以用的 globalData，如下所示
     *
     *
     * 注意，在创建三种不同的文件时，数据结构会有细微不一样
     *
     * - 文件夹复制
     *
     *    模板文件夹内的文件都没有 localData，但它可以通过 ref 获取到文件夹模板的 data 数据，
     *    而文件夹模板是可以包含 localData 的
     *
     * - 创建文本文件
     *
     *    文本文件默认的 data 会和 globalData 的数据 merge
     *
     *
     * - 创建关联文件
     *
     *    源文件和关联文件可能都会有它自己的模板，有它自己的 localData，
     *    所以它们的 data 会和各自的 localData 合并，有一点不一样的是，
     *    关联文件可以通过 ref 来引用源文件的所有 data 数据
     */
    globalData: {
      projectName: 'vue'
    }
  }
}
