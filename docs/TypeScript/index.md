# TypeScript

## 基础知识

typeof 检测 null 返回是 object
typeof 一个没有值的变量会返回 undefined

### 基础类型

- null是一个只有一个值的特殊类型。表示一个空对象引用。
- undefined 是一个没有设置值的变量。
- never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。声明为 never 类型的变量只能被 never 类型所赋值

**?? 和 || 的区别**

- 相同点
  - 用法相同，前后是值，中间用符号连接
  - `值1 ?? 值2`
  - `值1 || 值2`
- 不同点
  - 判断方式不同：
    - 使用`??`时，只有当`值1`为`null`或`undefined`时才返回`值2`
    - 使用`||`时，`值1`会转换为布尔值判断，为`true`时返回`值1`,`false`返回`值2`

**type 和 interface的区别**

- 相同点
  - 都可描述一个对象或函数
    - interface

      ```typescript
        interface User {
          name: string
          age: number
        }
        
        interface SetUser {
          (name: string, age: number): void;
        }
      ```

    - type

      ```typescript
        type User {
          name: string
          age: number
        }
        type SetUser = (name: string, age: number)=> void
      ```

  - 都允许拓展
    - interface和type都可以拓展，并且两者并不是相互独立的，也就是说interface可以extends type,type也可以 extends interface。虽然效果差不多，但是两者语法不同。
    - interface extends interface

      ```typescript
        interface Name {
          name: string
        }
        interface User extend Name  {
          age: number
        }
      ```

    - type extends type

      ```typescript
        type Name = {
          name: string
        }
        type User = Name & {age: number}
      ```
  
    - interface extend type

      ```typescript
        type Name = {
          name: string
        }
        interface User extends Name {
          age: number
        }
      ```

    - type extends interface
  
      ```typescript
        interface Name {
          name: string
        }
        type User = Name &  {
          age: number
        }
      ```

- 不同点
  - type可以但interface不可
    1. type可以声明基本类型别名，联合类型，元组等类型

      ```typescript
        type Name = string

        interface Dog {
          wong()
        }
        interface Cat {
          miao()
        }

        type Pet = Dog | Cat

        type PetList = [Dog, Pet]
      ```

    2. type语句还可使用typeof获取实例的 类型进行赋值

      ```typescript
        let div = document.createElement('div')
        type B = typeof div
      ```

    3. 骚操作

      ```typescript
        type StringOrNumber = string | number;
        type Text = string | {text: string};
        type NameLookup = Dictionary<string, Person>;
        type Callback<T> = (data: T) => void;
        type Pair<T> = [T, T];
        type Coordinates = Pair<number>;
        type Tree<T> = T | { left: Tree<T>, right: Tree<T>};        
      ```

  - interface 可以但是type不可以
    - interface能够声明合并

    ```typescript
      interface User {
        name: string
        age: number
      }

      interface User {
        sex: string
      }

      /*
      User 接口为 {
        name: string
        age: number
        sex: string 
      }
      */
    ```
