# 美化滚动条
## 1.scss混合全局定义

```scss
/******************************美化滚动条*******************************/
@mixin scrollbar($radius: 0, $width: 8px,$height:10px, $track: #e8e8f8, $thumb: #cbcbd9) {
  &::-webkit-scrollbar-track-piece {
    //滚动条凹槽的颜色，还可以设置边框属性
    background-color: $track;
    border-radius: $radius;

  }

  &::-webkit-scrollbar {
    //滚动条的宽度
    width: $width;
    height: $height;
  }

  &::-webkit-scrollbar-thumb {
    //滚动条的设置
    background-color: rgba($thumb, 0.6);
    background-clip: padding-box;
    border-radius: $radius;

  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: $thumb;

  }
}
```
## 2.引用

```scss
 @include scrollbar(5px, 5px, 10Px);
```
