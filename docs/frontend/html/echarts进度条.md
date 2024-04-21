# echarts进度条
![progressEcharts](/progressEcharts.png)



```javascript
/**
 * 渲染健康评估分进度条
 * @returns 
 */
export function renderHealthDegree(value) {
  let barWidth = 14.5;
  const list = [{
    name: '健康评估',
    value
  }]
  return {
    xAxis: {
      max: 10,
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      }
    },
    grid: {
      containLabel: true,
      left: 0,
      top: 0,
      right: 100,
      bottom: 0
    },
    yAxis: [{
      inverse: true,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        margin: 10,
        textStyle: {
          fontSize: 14,
          color: '#fff'
        }
      },
      data: list.map(el=>el.name),
    }],
    series: [{ //内
        type: 'bar',
        barWidth,
        legendHoverLink: false,
        symbolRepeat: true,
        silent: true,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
                offset: 0,
                color: '#1DFC1A' // 0% 处的颜色
              },
              {
                offset: 0.5,
                color: '#F9E003' // 50% 处的颜色
              },
              {
                offset: 1,
                color: '#FE1300' // 100% 处的颜色
              }
            ]
          }
        },
        data: list,
        z: 1,
        animationEasing: 'elasticOut'
      },
      { // 背景
        type: 'pictorialBar',
        animationDuration: 0,
        symbolRepeat: 'fixed',
        symbolMargin: '20%',
        symbol: 'roundRect',
        symbolSize: [6, barWidth],
        itemStyle: {
          normal: {
            //color: '#12272A',
            color: 'rgba(48,242,120,0)',


          }
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            offset: [0, 2],
            distance: 10,
            textStyle: {
              color: '#FFFFFF',
              fontSize: 14,
            },
            formatter: function (a, b) {
              return `${a.value}分`
            }
          },

        },
        data: [8.8],
        z: 0,
        animationEasing: 'elasticOut'
      },
      { //分隔
        type: 'pictorialBar',
        itemStyle: {
          color: '#000'
        },
        symbolRepeat: 'fixed',
        symbolMargin: 4,
        symbol: 'roundRect',
        symbolClip: true,
        symbolSize: [2, barWidth],
        symbolPosition: 'start',
        symbolOffset: [0, 0],
        data: list,
        z: 2,
        animationEasing: 'elasticOut'
      }
    ]
  };
}

```
