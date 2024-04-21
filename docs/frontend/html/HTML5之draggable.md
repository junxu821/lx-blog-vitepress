# HTML5之draggable
* h5新特性

# 1.取值:auto|true|false,auto是浏览器默认的行为
# 2.注意
* **提示****：** 链接和图像默认是可拖动的。
*  当一个元素被设置成可拖拽时，元素中的文本和其他子元素不能再以正常的方式（通过鼠标点击和拖拽）被选中。用户必须按住 alt 键，再用鼠标选择文本，或者使用键盘选择。
* 可执行文件拖入浏览器,不会触发拖拽事件
# 3.拖拽的元素
设置draggable:true
事件:ondragstart,ondrag,ondragend
* ondragstart:拖拽开始式触发
* ondrag:过程中触发
* ondragend:拖拽结束时触发
# 4.放置区的元素
事件:ondrop,ondragenter,ondragover,ondragleave

* ondrop:放置的时候触发:在ondragend之前(阻止默认行为)
* ondragenter:进入放置区域时触发一次
* ondragover:ondragenter之后ondragend之前频繁触发(阻止默认行为)
* ondragleave:离开放置区触发
默认行为是以连接形式打开.
# 5.接口
# DataTransfer
`DataTransfer` 对象用于保存拖动并放下（drag and drop）过程中的数据。它可以保存一项或多项数据，这些数据项可以是一种或者多种数据类型。关于拖放的更多信息，请参见 [Drag and Drop](https://developer.mozilla.org/en-US/DragDrop/Drag_and_Drop).

这个对象可以从所有拖动事件 `drag events` 的 `dataTransfer` 属性上获取。

[构造函数](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%20%22Permalink%20to%20%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%22)

`DataTransfer()`

生成并且返回一个新的 `DataTransfer` 对象。

[属性](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer#%E5%B1%9E%E6%80%A7%20%22Permalink%20to%20%E5%B1%9E%E6%80%A7%22)

[标准属性](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransfer#%E6%A0%87%E5%87%86%E5%B1%9E%E6%80%A7%20%22Permalink%20to%20%E6%A0%87%E5%87%86%E5%B1%9E%E6%80%A7%22)

1.`DataTransfer.dropEffect`

获取当前选定的拖放操作类型或者设置的为一个新的类型。值必须为 `none`, `copy`, `link` 或 `move`。

`DataTransfer.effectAllowed`

提供所有可用的操作类型。必须是 `none`, `copy`, `copyLink`, `copyMove`, `link`, `linkMove`, `move`, `all` or `uninitialized` 之一。

`DataTransfer.files`

包含数据传输中可用的所有本地文件的列表。如果拖动操作不涉及拖动文件，则此属性为空列表。

`DataTransfer.items` 只读

提供一个包含所有拖动数据列表的 `DataTransferItemList` 对象。

`DataTransfer.types` 只读

一个提供 `dragstart` 事件中设置的格式的 `strings` 数组。

1. `DataTransfer.clearData()`

删除与给定类型关联的数据。类型参数是可选的。如果类型为空或未指定，则删除与所有类型关联的数据。如果指定类型的数据不存在，或者 data transfer 中不包含任何数据，则该方法不会产生任何效果。

2. `DataTransfer.getData()`

检索给定类型的数据，如果该类型的数据不存在或 data transfer 不包含数据，则返回空字符串。

3. `DataTransfer.setData()`

设置给定类型的数据。如果该类型的数据不存在，则将其添加到末尾，以便类型列表中的最后一项将是新的格式。如果该类型的数据已经存在，则在相同位置替换现有数据。

4. `DataTransfer.setDragImage()`
用于设置自定义的拖动图像。

# DataTransferItem
描述了一个拖拽项。在一个拖拽操作\*中，\*每一个 `drag event` 都有一个`dataTransfer` 属性，它包含一个存有拖拽数据的 `list` ，其中每一项都是一个 `DataTransferItem` 。

这个接口没有构造函数。

[属性](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransferItem#%E5%B1%9E%E6%80%A7%20%22Permalink%20to%20%E5%B1%9E%E6%80%A7%22)

`DataTransferItem.kind` 只读

拖拽项的种类，`string` 或是 `file`。

`DataTransferItem.type` 只读

拖拽项的类型，一般是一个 MIME 类型。

[方法](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransferItem#%E6%96%B9%E6%B3%95%20%22Permalink%20to%20%E6%96%B9%E6%B3%95%22)

`DataTransferItem.getAsFile()`

返回一个关联拖拽项的 `File` 对象（当拖拽项不是一个文件时返回 null）。

`DataTransferItem.getAsString()`

使用拖拽项的字符串作为参数执行指定回调函数。

`DataTransferItem.webkitGetAsEntry()` 非标准

返回一个基于 `FileSystemEntry` 的对象来表示文件系统中选中的项目。通常是返回一个`FileSystemFileEntry` 或是 `FileSystemDirectoryEntry` 对象。

# DataTransferItemList
\*\*

```Plain Text
DataTransferItemList
```
\*\* 对象是一组代表被拖动项的`DataTransferItem` 对象的列表。在拖动操作期间，每个`DragEvent` 都有一个 `dataTransfer` 属性，该属性是 `DataTransferItemList`.

该接口没有构造函数

[属性](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransferItemList#%E5%B1%9E%E6%80%A7%20%22Permalink%20to%20%E5%B1%9E%E6%80%A7%22)

`DataTransferItemList.length` 只读

`无符号长整型` ：列表中拖动项的数量。

[方法](https://developer.mozilla.org/zh-CN/docs/Web/API/DataTransferItemList#%E6%96%B9%E6%B3%95%20%22Permalink%20to%20%E6%96%B9%E6%B3%95%22)

`DataTransferItemList.add()`[ (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/add "Currently only available in English (US)")

向拖动项列表中添加新项 (`File`对象或`string`)，该方法返回一个 `DataTransferItem` 对象。

`DataTransferItemList.remove()`[ (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/remove "Currently only available in English (US)")

根据索引删除拖动项列表中的对象。

`DataTransferItemList.clear()`[ (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList/clear "Currently only available in English (US)")

清空拖动项列表。

`DataTransferItemList.DataTransferItem()`[ (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItemList "Currently only available in English (US)")

取值方法：返回给定下标的`DataTransferItem`对象。



```css
div>
      <!-- <a
        href="#"
        ondragstart="handleDragStart(event)"
        ondrag="handleDrag(event)"
        ondragend="handleDragEnd(event)"
        >连接</a
      > -->
      <div
        class="drag"
        draggable="true"
        id="dragger"
        ondragstart="handleDragStart(event)"
        ondrag="handleDrag(event)"
        ondragend="handleDragEnd(event)"
      >
        拖动元素
      </div>
      <div
        class="drop"
        ondrop="handleDrop(event)"
        ondragenter="handleDragEnter(event)"
        ondragover="handleDragOver(event)"
        ondragleave="handleDragLeave(event)"
      >
        放置区域
      </div>
    </div>
    <script>
      var img = new Image();
      img.src =
        "https://p6-bd-official.byteimg.com/img/bytedance-cn/4ac74bbefc4455d0b350fff1fcd530c7~noop.image";
      img.onload = () => {
        console.log("图片加载成功！");
      };

      /* 拖拽元素响应事件 */
      function handleDragStart(e) {
        console.log("dragStart");
        e.dataTransfer.setDragImage(img, 0, 0);
        e.dataTransfer.setData("DRAG_NODE_ID", e.target.id);
      }
      function handleDrag(e) {
        console.log("drag");
      }
      function handleDragEnd(e) {
        console.log("dragEnd");
      }

      /* 放置元素响应事件 */
      function handleDragEnter(e) {
        console.log("dragEnter");
      }
      function handleDragOver(e) {
        console.log("dragOver");
        e.preventDefault();
      }
      function handleDragLeave(e) {
        console.log("dragLeave");
      }
      function handleDrop(e) {
        console.log("drop");
        e.preventDefault();
        var data = e.dataTransfer.getData("DRAG_NODE_ID");
        e.target.appendChild(document.getElementById(data));
      }
    </script>
```
