# echarts暂无数据的表示
```javascript
export const useNoDataEcharts = (title = '') => {
  if (!title) {
    return {
      title: {
        text: '暂无数据',
        x: 'center',
        y: 'center',
        textStyle: {
          color: '#9798b4',
          fontWeight: 'normal',
          fontSize: 16,
          fill: '#9798b4'
        }
      }
    }
  }
  return {
    title: {
      text: `${title}`,
      left: 'center',
      top: 10
    },
    graphic: {
      type: 'text',
      left: '49%',
      top: '52%',
      style: {
        text: '暂无数据',
        textAlign: 'center',
        fill: '#9798b4',
        fontSize: 16
      }
    }
  }
}
```
