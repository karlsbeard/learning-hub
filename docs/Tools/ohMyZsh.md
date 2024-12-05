# Oh My Zsh

- 一个十分优秀的工具，可以很大程度上为程序员进行提效
- 官方地址: <https://github.com/ohmyzsh/ohmyzsh>

## 安装使用

### MacOS

#### 命令行完成安装（MasOS就是好哟）

- **curl**

    ```bash
      sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

- **wget**

    ```bash
      sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

- **fetch**

    ```bash
      sh -c "$(fetch -o - https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ```

#### 安装第三方插件

  1. **zsh-autosuggestions**

     - 作用：自动补全命令，妈妈再也不用担心我记忆`git`命令了
     - 代码仓库地址: <https://github.com/zsh-users/zsh-autosuggestions>
     - 一键安装：

      ```bash
      git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
      ```

  2. **zsh-syntax-highlighting**

     - 作用：突显命令，有助于检查命令，很有利于眼睛和大脑
     - 代码仓库地址：<https://github.com/zsh-users/zsh-syntax-highlighting>
     - 一键安装:

      ```bash
        git clone git@github.com:zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
      ```

#### 自带插件推荐

1. **git**
   - 该插件为git命令设置了别名，不再需要每次敲完整命令

   ``` bash
    gcb => git checkout -b
    gco => git checkout
    gcm => git checkout 主分支(master, main...)
    gcd => git checkout 开发分支(dev...)
    gb => git branch
    gba => git branch -a
    gbd => git branch -d
    ......
   ```

2. **node**
   - 该插件提供快速跳转nodejs文档，在命令行中输入`node-docs xxx(api)`，如`node-docs fs`快速跳转到`fsapi`，对于正在使用`nodejs`开发突然忘记某个`api`需要查看文档，这个插件有效节省搜索文档时间。
3. **vscode**
    - 命令行输入`code`或`vsc`在vscode中打开当前路径下的文件。
4. **web-search**
    - 在默认浏览器中通过指定搜索服务进行搜索，搜索服务包括`google bing github...`，使用方式为命令行中输入搜索服务 关键词，如`google zsh`用谷歌快速搜索zsh。

#### 编辑`.zsh`文件

  1. 执行编辑命令

      ```bash
      nano ~/.zshrc
      ```

  2. 写入plugin

      ```bash
        plugins=(
              git
              node
              zsh-syntax-highlighting
              zsh-autosuggestions
              pnpm
              vscode
              web-search
        )
      ```

  3. 重置`.zsh`文件使其生效

      ```bash
      source ~/.zshrc
      ```
