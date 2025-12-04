(function($) {
  'use strict';
  $(function() {
    
    //----LINE CHART----
    // if ($("#performaneLine").length) {
    //   var graphGradient = document.getElementById("performaneLine").getContext('2d');
    //   var graphGradient2 = document.getElementById("performaneLine").getContext('2d');
    //   var saleGradientBg = graphGradient.createLinearGradient(5, 0, 5, 100);
    //   saleGradientBg.addColorStop(0, 'rgba(26, 115, 232, 0.18)');
    //   saleGradientBg.addColorStop(1, 'rgba(26, 115, 232, 0.02)');
    //   var saleGradientBg2 = graphGradient2.createLinearGradient(100, 0, 50, 150);
    //   saleGradientBg2.addColorStop(0, 'rgba(0, 208, 255, 0.19)');
    //   saleGradientBg2.addColorStop(1, 'rgba(0, 208, 255, 0.03)');
    //   var salesTopData = {
    //       labels: ["JAN","FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    //       datasets: [{
    //           label: '2024',
    //           data: [699333910, 
    //             712020860, 
    //             733753850, 
    //             759257090, 
    //             668713110, 
    //             719631450, 
    //             692085780, 
    //             701810460, 
    //             724234050, 
    //             686599750,
    //             709782900, 
    //             745893410 ],

    //           backgroundColor: saleGradientBg,
    //           borderColor: [
    //               '#131f55ff',
    //           ],
    //           borderWidth: 1.5,
    //           fill: true,
    //           pointBorderWidth: 1,
    //           pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4, 4, 4],
    //           pointHoverRadius: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    //           pointBackgroundColor: ['#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3','#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3','#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3','#1F3BB3)'],
    //           pointBorderColor: ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',],
    //       },

    //       {
    //           label: '2026',

    //             data: [ 545793890,
    //                   513947010,
    //                   585199210,
    //                   527651480,
    //                   500142760,
    //                   547111760,
    //                   507096200,
    //                   523495040,
    //                   525045610,
    //                   545509930,
    //                   545128110,
    //                   515579710 ],
    //           backgroundColor: saleGradientBg,
    //           borderColor: [
    //               '#1F3BB3',
    //           ],
    //           borderWidth: 1.5,
    //           fill: true, 
    //           pointBorderWidth: 1,
    //           pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4, 4, 4],
    //           pointHoverRadius: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    //           pointBackgroundColor: ['#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3','#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3','#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3','#1F3BB3)'],
    //           pointBorderColor: ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',],
    //       },

    //       {
    //         label: '2025',
    //         data: [728789760, 
    //           691290860,
    //           719280000,
    //           708673070,
    //           686392920,
    //           703324550,
    //           668083710,
    //           755344160, 
    //           656261130, 
    //           803899940, 
    //           621547370, 
    //           751786430, ],
            
    //         backgroundColor: saleGradientBg2,
    //         borderColor: [
    //             '#52CDFF',
    //         ],
    //         borderWidth: 1.5,
    //         fill: true, 
    //         pointBorderWidth: 1,
    //         pointRadius: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4, 4, 4],
    //         pointHoverRadius: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    //         pointBackgroundColor: ['#52CDFF)', '#52CDFF', '#52CDFF', '#52CDFF','#52CDFF)', '#52CDFF', '#52CDFF', '#52CDFF','#52CDFF)', '#52CDFF', '#52CDFF', '#52CDFF','#52CDFF)'],
    //         pointBorderColor: ['#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff','#fff',],
    //     }]
    //   };
      
  
    //   var salesTopOptions = {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //       scales: {
    //           yAxes: [{
    //               gridLines: {
    //                   display: true,
    //                   drawBorder: false,
    //                   color:"#F0F0F0",
    //                   zeroLineColor: '#F0F0F0',
    //               },
    //               ticks: {
    //                  beginAtZero: false,
    //                  autoSkip: true,
    //                  maxTicksLimit: 4,
    //                  fontSize: 10,
    //                  color:"#6B778C",
    //                  callback: function(value) {
    //                     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    //                   }
    //               }
    //           }],
    //           xAxes: [{
    //             gridLines: {
    //                 display: false,
    //                 drawBorder: false,
    //             },
    //             ticks: {
    //               beginAtZero: false,
    //               autoSkip: true,
    //               maxTicksLimit: 7,
    //               fontSize: 10,
    //               color:"#6B778C"
    //             }
    //         }],
    //       },
    //       legend:false,
    //       legendCallback: function (chart) {
    //         var text = [];
    //         text.push('<div class="chartjs-legend"><ul>');
    //         for (var i = 0; i < chart.data.datasets.length; i++) {
    //           console.log(chart.data.datasets[i]); 
    //           text.push('<li>');
    //           text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
    //           text.push(chart.data.datasets[i].label);
    //           text.push('</li>');
    //         }
    //         text.push('</ul></div>');
    //         return text.join("");
    //       },
          
    //       elements: {
    //           line: {
    //               tension: 0.4,
    //           }
    //       },
    //       tooltips: {
    //         backgroundColor: 'rgba(31, 59, 179, 1)',
    //         callbacks: {
    //           label: function(tooltipItem, data) {
    //             let value = tooltipItem.yLabel;
    //             let formatted = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    //             return data.datasets[tooltipItem.datasetIndex].label + ": " + formatted;
    //           }
    //         }
    //       }
    //   }
    //   var salesTop = new Chart(graphGradient, {
    //       type: 'line',
    //       data: salesTopData,
    //       options: salesTopOptions
    //   });
      
    //   document.getElementById('performance-line-legend').innerHTML = salesTop.generateLegend();
    // }

  // SHARE BUTTON
  if ($("#btnShare").length) {
    $("#btnShare").click(function () {
      $("#shareMenu").toggle();
    });

    $("#waShare").click(() => {
      window.open(`https://wa.me/?text=${encodeURIComponent(location.href)}`, "_blank");
    });
    $("#mailShare").click(() => {
      window.location.href = `mailto:?subject=Share Dashboard&body=${encodeURIComponent(location.href)}`;
    });
  }

  // PRINT BUTTON
  if ($("#btnPrint").length) {
    $("#btnPrint").click(() => {
      window.print();
    });
  }

// =======================================
// GLOBAL DATA (FIX agar tidak ketimpa)
// =======================================
window.GLOBAL_DATA = {
  recommendations: [],
  lowSales: [],
  lowStock: []
};





// =======================================
// EXPORT KE EXCEL — DATA TIDAK TERTIMPA
// =======================================
// if ($("#exportToExcel").length) {

//   $("#exportToExcel").click(function () {

//     const sheet1 = XLSX.utils.json_to_sheet(GLOBAL_DATA.recommendations);
//     const sheet2 = XLSX.utils.json_to_sheet(GLOBAL_DATA.lowSales);
//     const sheet3 = XLSX.utils.json_to_sheet(GLOBAL_DATA.lowStock);

//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, sheet1, "Recommendation Table");
//     XLSX.utils.book_append_sheet(workbook, sheet2, "Low Sales Table");
//     XLSX.utils.book_append_sheet(workbook, sheet3, "Low Stock Table");

//     XLSX.writeFile(workbook, "product_report_export.xlsx");
//   });
// }

// =======================
// EXPORT MULTI-SHEET
// =======================
if ($("#exportToExcel").length) {

  $("#exportToExcel").click(function () {

    // Sheet 1 – Recommendation Table
    const sheet1 = XLSX.utils.json_to_sheet(GLOBAL_DATA.recommendations);

    // Sheet 2 – Low Sales Table
    const sheet2 = XLSX.utils.json_to_sheet(GLOBAL_DATA.lowSales);

    // Sheet 3 – Low Stock Table
    const sheet3 = XLSX.utils.json_to_sheet(GLOBAL_DATA.lowStock);

    // Sheet 4 – Yearly Financial Chart Data
    const chartData = [];
    const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

    // 2024
    months.forEach((m, i) => {
      chartData.push({
        year: 2024,
        month: m,
        earning: dataset2024.earning[i],
        modal:   dataset2024.modal[i],
        profit:  dataset2024.profit[i],
      });
    });

    // 2025
    months.forEach((m, i) => {
      chartData.push({
        year: 2025,
        month: m,
        earning: dataset2025.earning[i],
        modal:   dataset2025.modal[i],
        profit:  dataset2025.profit[i],
      });
    });

    const sheet4 = XLSX.utils.json_to_sheet(chartData);

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1, "Recommendation Table");
    XLSX.utils.book_append_sheet(wb, sheet2, "Low Sales Table");
    XLSX.utils.book_append_sheet(wb, sheet3, "Low Stock Table");
    XLSX.utils.book_append_sheet(wb, sheet4, "Yearly Financial Chart");

    // Save file
    XLSX.writeFile(wb, "dashboard_export.xlsx");
  });

}




    if ($("#performaneLine").length) {
      var ctx = document.getElementById("performaneLine").getContext('2d');

      // GRADIENTS
      var gradientBlack = ctx.createLinearGradient(0, 0, 0, 150);
      gradientBlack.addColorStop(0, 'rgba(30, 30, 30, 0.20)');
      gradientBlack.addColorStop(1, 'rgba(30, 30, 30, 0.02)');

      var gradientBlueMedium = ctx.createLinearGradient(0, 0, 0, 150);
      gradientBlueMedium.addColorStop(0, 'rgba(31, 59, 179, 0.20)');
      gradientBlueMedium.addColorStop(1, 'rgba(31, 59, 179, 0.02)');

      var gradientGreen = ctx.createLinearGradient(0, 0, 0, 150);
      gradientGreen.addColorStop(0, 'rgba(0, 174, 91, 0.20)');
      gradientGreen.addColorStop(1, 'rgba(0, 174, 91, 0.02)');


      // DATASET
      const dataset2024 = {
        earning: [545793890,
        513947010,
        585199210,
        527651480,
        500142760,
        547111760,
        507096200,
        523495040,
        525045610,
        545509930,
        545128110,
        515579710],
        modal:   [300186640,
        282670856,
        321859566,
        290208314,
        275078518,
        300911468,
        278902910,
        287922272,
        288775086,
        300030462,
        299820461,
        283568841],
        profit:  [245607251,
        231276155,
        263339645,
        237443166,
        225064242,
        246200292,
        228193290,
        235572768,
        236270525,
        245479469,
        245307650,
        232010870]
      };

      const dataset2025 = {
        earning: [551084640,
        496027720,
        528916630,
        460343530,
        518326990,
        466498040,
        504488350,
        549120020,
        504427940,
        554361270,
        484436980,
        552710560],
        modal:   [303096552,
        272815246,
        290904147,
        253188942,
        285079845,
        256573922,
        277468593,
        302016011,
        277435367,
        304898699,
        266440339,
        303990808],
        profit:  [247988088,
        223212474,
        238012484,
        207154589,
        233247146,
        209924118,
        227019758,
        247104009,
        226992573,
        249462572,
        217996641,
        248719752]
      };

      // CHART DEFAULT (2024)
      var salesTopData = {
        labels: ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],
        datasets: [
        {
          label: 'Earning',
          data: dataset2024.earning,
          backgroundColor: gradientBlack,
          borderColor: '#1E1E1E',
          borderWidth: 1.5,
          pointRadius: 4,
          pointHoverRadius: 2,
          pointBackgroundColor: '#1E1E1E',
          pointBorderColor: '#fff',
          fill: true
        },
        {
          label: 'Modal',
          data: dataset2024.modal,
          backgroundColor: gradientBlueMedium,
          borderColor: '#1F3BB3',   // tetap biru medium
          borderWidth: 1.5,
          pointRadius: 4,
          pointHoverRadius: 2,
          pointBackgroundColor: '#1F3BB3',
          pointBorderColor: '#fff',
          fill: true
        },
        {
          label: 'Profit',
          data: dataset2024.profit,
          backgroundColor: gradientGreen,
          borderColor: '#00AE5B',
          borderWidth: 1.5,
          pointRadius: 4,
          pointHoverRadius: 2,
          pointBackgroundColor: '#00AE5B',
          pointBorderColor: '#fff',
          fill: true
        }
      ]
      };

      var salesTopOptions = {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 900 },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 4,
              fontSize: 10,
              color: "#6B778C",
              callback: v => v.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
          }],
          xAxes: [{
            gridLines: { display: false, drawBorder: false },
            ticks: { autoSkip: true, maxTicksLimit: 7, fontSize: 10, color:"#6B778C" }
          }],
        },
        legend:false,
        legendCallback: function(chart) {
          var text = ['<div class="chartjs-legend"><ul>'];
          chart.data.datasets.forEach(ds => {
            text.push(`<li><span style="background-color:${ds.borderColor}"></span>${ds.label}</li>`);
          });
          text.push('</ul></div>');
          return text.join("");
        },
        elements: { line: { tension: 0.4 }},
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel;
              return data.datasets[tooltipItem.datasetIndex].label + ": " +
                value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            }
          }
        }
      };

      var salesTop = new Chart(ctx, { type: 'line', data: salesTopData, options: salesTopOptions });
      document.getElementById('performance-line-legend').innerHTML = salesTop.generateLegend();

      // FILTER YEAR CONTROL
      function updateLineChartByYear(year) {
        let dataSource = String(year) === "2024" ? dataset2024 : dataset2025;

        salesTop.data.datasets[0].data = dataSource.earning;
        salesTop.data.datasets[1].data = dataSource.modal;
        salesTop.data.datasets[2].data = dataSource.profit;

        salesTop.update();
        document.getElementById('performance-line-legend').innerHTML = salesTop.generateLegend();
      }

      $('.filter-year-chart').on('click', function (e) {
        e.preventDefault();
        let year = String($(this).data("year")); // 🔥 convert ke string
        updateLineChartByYear(year);

        $('#filterYearChartBtn').html(`${year} <span class="ms-2">&#9662;</span>`);
      });
    }


    
    // if ($("#performaneLine-dark").length) {
    //   var graphGradient = document.getElementById("performaneLine-dark").getContext('2d');
    //   var graphGradient2 = document.getElementById("performaneLine-dark").getContext('2d');
    //   var saleGradientBg = graphGradient.createLinearGradient(5, 0, 5, 100);
    //   saleGradientBg.addColorStop(0, 'rgba(26, 115, 232, 0.18)');
    //   saleGradientBg.addColorStop(1, 'rgba(34, 36, 55, 0.5)');
    //   var saleGradientBg2 = graphGradient2.createLinearGradient(10, 0, 0, 150);
    //   saleGradientBg2.addColorStop(0, 'rgba(0, 208, 255, 0.19)');
    //   saleGradientBg2.addColorStop(1, 'rgba(34, 36, 55, 0.2)');
    //   var salesTopDataDark = {
    //       labels: ["SUN","sun", "MON", "mon", "TUE","tue", "WED", "wed", "THU", "thu", "FRI", "fri", "SAT"],
    //       datasets: [{
    //           label: '# of Votes',
    //           data: [50, 110, 60, 290, 200, 115, 130, 170, 90, 210, 240, 280, 200],
    //           backgroundColor: saleGradientBg,
    //           borderColor: [
    //               '#1F3BB3',
    //           ],
    //           borderWidth: 1.5,
    //           fill: true, // 3: no fill
    //           pointBorderWidth: 1,
    //           pointRadius: [4, 4, 4, 4, 4,4, 4, 4, 4, 4,4, 4, 4],
    //           pointHoverRadius: [2, 2, 2, 2, 2,2, 2, 2, 2, 2,2, 2, 2],
    //           pointBackgroundColor: ['#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3','#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3','#1F3BB3)', '#1F3BB3', '#1F3BB3', '#1F3BB3','#1F3BB3)'],
    //           pointBorderColor: ['#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437',],
    //       },{
    //         label: '# of Votes',
    //         data: [30, 150, 190, 250, 120, 150, 130, 20, 30, 15, 40, 95, 180],
    //         backgroundColor: saleGradientBg2,
    //         borderColor: [
    //             '#52CDFF',
    //         ],
    //         borderWidth: 1.5,
    //         fill: true, // 3: no fill
    //         pointBorderWidth: 1,
    //         pointRadius: [0, 0, 0, 4, 0],
    //         pointHoverRadius: [0, 0, 0, 2, 0],
    //         pointBackgroundColor: ['#52CDFF)', '#52CDFF', '#52CDFF', '#52CDFF','#52CDFF)', '#52CDFF', '#52CDFF', '#52CDFF','#52CDFF)', '#52CDFF', '#52CDFF', '#52CDFF','#52CDFF)'],
    //           pointBorderColor: ['#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437','#222437',],
    //     }]
    //   };
  
    //   var salesTopOptionsDark = {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //       scales: {
    //           yAxes: [{
    //               gridLines: {
    //                   display: true,
    //                   drawBorder: false,
    //                   color:"rgba(255,255,255,.05)",
    //                   zeroLineColor: "rgba(255,255,255,.05)",
    //               },
    //               ticks: {
    //                 beginAtZero: false,
    //                 autoSkip: true,
    //                 maxTicksLimit: 4,
    //                 fontSize: 10,
    //                 color:"#6B778C"
    //               }
    //           }],
    //           xAxes: [{
    //             gridLines: {
    //                 display: false,
    //                 drawBorder: false,
    //             },
    //             ticks: {
    //               beginAtZero: false,
    //               autoSkip: true,
    //               maxTicksLimit: 7,
    //               fontSize: 10,
    //               color:"#6B778C"
    //             }
    //         }],
    //       },
    //       legend:false,
    //       legendCallback: function (chart) {
    //         var text = [];
    //         text.push('<div class="chartjs-legend"><ul>');
    //         for (var i = 0; i < chart.data.datasets.length; i++) {
    //           console.log(chart.data.datasets[i]); // see what's inside the obj.
    //           text.push('<li>');
    //           text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
    //           text.push(chart.data.datasets[i].label);
    //           text.push('</li>');
    //         }
    //         text.push('</ul></div>');
    //         return text.join("");
    //       },
          
    //       elements: {
    //           line: {
    //               tension: 0.4,
    //           }
    //       },
    //       tooltips: {
    //           backgroundColor: 'rgba(31, 59, 179, 1)',
    //       }
    //   }
    //   var salesTopDark = new Chart(graphGradient, {
    //       type: 'line',
    //       data: salesTopDataDark,
    //       options: salesTopOptionsDark
    //   });
    //   document.getElementById('performance-line-legend-dark').innerHTML = salesTopDark.generateLegend();
    // }

    if ($("#datepicker-popup").length) {
      $('#datepicker-popup').datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
      });
      $("#datepicker-popup").datepicker("setDate", "0");
    }
    if ($("#status-summary").length) {
      var statusSummaryChartCanvas = document.getElementById("status-summary").getContext('2d');;
      var statusData = {
          labels: ["Atasan Pria", "Bawahan Pria", "Atasan Wanita", "Bawahan Wanita"],
          datasets: [{
              label: 'Total',
              data: [258,	257,	258,	257],
              backgroundColor: "#ffcc00",
              borderColor: [
                  '#01B6A0',
              ],
              borderWidth: 0,
              fill: false, // 3: no fill
              pointBorderWidth: 1,
              pointRadius: [4, 4, 4, 4],
              pointHoverRadius: [2, 2, 2, 2],
          }]
      };
  
      var statusOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: { top: 10, bottom: 10, left: 10, right: 10}
        },

          scales: {
              yAxes: [{
                display:false,
                  gridLines: {
                      display: false,
                      drawBorder: false,
                      color:"#F0F0F0"
                  },
                  ticks: {
                    beginAtZero: false,
                    autoSkip: true,
                    maxTicksLimit: 4,
                    fontSize: 10,
                    color:"#6B778C"
                  }
              }],
              xAxes: [{
                display:false,
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                  beginAtZero: false,
                  autoSkip: true,
                  maxTicksLimit: 7,
                  fontSize: 10,
                  color:"#6B778C"
                }
            }],
          },
          legend:false,
          
          elements: {
              line: {
                tension: 0.4,
              },
              point: {
                backgroundColor: '#ffcc00', // warna kuning titik
                borderWidth: 0
             }
          },
          tooltips: {
              backgroundColor: 'rgba(31, 59, 179, 1)',
          }
      }
      var statusSummaryChart = new Chart(statusSummaryChartCanvas, {
          type: 'line',
          data: statusData,
          options: statusOptions
      });
    }

    // total product
    if ($('#totalVisitors').length) {
      var bar = new ProgressBar.Circle(totalVisitors, {
        color: '#fff',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 15,
        trailWidth: 15, 
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: {
          color: '#52CDFF',
          width: 15
        },
        to: {
          color: '#677ae4',
          width: 15
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '0rem';
      bar.animate(0.64); // Number from 0.0 to 1.0
      // document.querySelectorAll('.grid-margin').forEach(el => {
      //   el.style.marginBottom = '20px';
      // });
    }

    // total stock
    if ($('#visitperday').length) {
      var bar = new ProgressBar.Circle(visitperday, {
        color: '#fff',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 15,
        trailWidth: 15,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: {
          color: '#34B1AA',
          width: 15
        },
        to: {
          color: '#677ae4',
          width: 15
        },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
  
          var value = Math.round(circle.value() * 100);
          if (value === 0) {
            circle.setText('');
          } else {
            circle.setText(value);
          }
  
        }
      });
  
      bar.text.style.fontSize = '0rem';
      bar.animate(.34); // Number from 0.0 to 1.0
      // document.querySelectorAll('.grid-margin').forEach(el => {
      //   el.style.marginBottom = '20px';
      // });
    }

    //----BAR CHART----
    if ($("#marketingOverview").length) {
      var marketingOverviewChart = document.getElementById("marketingOverview").getContext('2d');
      var marketingOverviewData = {
          labels: ["JAN","FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [{
              label: '2024',
              data: [ 2195,
                    2070,
                    2262,
                    2047,
                    2050,
                    2158,
                    2092,
                    2059,
                    2023,
                    2156,
                    2088,
                    2141 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 2133,
                  2025,
                  2127,
                  1826,
                  2058,
                  1930,
                  1982,
                  2112,
                  1977,
                  2224,
                  1949,
                  2210 ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview = new Chart(marketingOverviewChart, {
          type: 'bar',
          data: marketingOverviewData,
          options: marketingOverviewOptions
      });
      document.getElementById('marketing-overview-legend').innerHTML = marketingOverview.generateLegend();
    }

    

  if ($("#earningYear").length) {
      // =======================
      // DATA 2024–2025 (JAN–DEC)
      // =======================
      const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

      const chartData = {
        earning: {
          2024: [545793890,
                513947010,
                585199210,
                527651480,
                500142760,
                547111760,
                507096200,
                523495040,
                525045610,
                545509930,
                545128110,
                515579710],
          2025: [551084640,
                496027720,
                528916630,
                460343530,
                518326990,
                466498040,
                504488350,
                549120020,
                504427940,
                554361270,
                484436980,
                552710560],
        },
        modal: {
          2024: [300186640,
                282670856,
                321859566,
                290208314,
                275078518,
                300911468,
                278902910,
                287922272,
                288775086,
                300030462,
                299820461,
                283568841],
          2025: [303096552,
                272815246,
                290904147,
                253188942,
                285079845,
                256573922,
                277468593,
                302016011,
                277435367,
                304898699,
                266440339,
                303990808],
        },
        profit: {
          2024: [245607251,
                231276155,
                263339645,
                237443166,
                225064242,
                246200292,
                228193290,
                235572768,
                236270525,
                245479469,
                245307650,
                232010870],
          2025: [247988088,
                223212474,
                238012484,
                207154589,
                233247146,
                209924118,
                227019758,
                247104009,
                226992573,
                249462572,
                217996641,
                248719752],
        }
      };

      // =======================
      // Chart options (v2.x style)
      // =======================
      function chartOptions() {
        return {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 0, bottom: 0 } },
          scales: {
            yAxes: [{
              gridLines: { color: "#F0F0F0", drawBorder: false },
              ticks: {
                beginAtZero: true,
                fontSize: 10,
                color: "#6B778C",
                callback: function(value) {
                  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                }
              }
            }],
            xAxes: [{
              stacked: false,
              barPercentage: 0.4,
              categoryPercentage: 0.5,
              gridLines: { display: false },
              ticks: { fontSize: 10, color: "#6B778C" }
            }]
          },
          // disable default legend (we'll render custom one)
          legend: false,
          // legendCallback untuk generateLegend()
          legendCallback: function(chart) {
            var text = [];
            text.push('<div class="chartjs-legend"><ul>');
            for (var i = 0; i < chart.data.datasets.length; i++) {
              text.push('<li class="text-muted text-small">');
              text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
              text.push(chart.data.datasets[i].label);
              text.push('</li>');
            }
            text.push('</ul></div>');
            return text.join("");
          },
          tooltips: {
            backgroundColor: 'rgba(31, 59, 179, 1)',
            callbacks: {
              label: function(tooltipItem, data) {
                let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
              }
            }
          }
        };
      }

      // =======================
      // createChart: returns Chart instance & renders legend
      // =======================
      function createChart(elementId, legendId, dataKey, monthIndex) {
        const ctx = document.getElementById(elementId).getContext("2d");

        const chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [months[monthIndex]],
            datasets: [
              {
                label: "2024",
                data: [chartData[dataKey][2024][monthIndex]],
                backgroundColor: "#1F3BB3",
                borderColor: "#1F3BB3",
                borderWidth: 0,
                fill: true
              },
              {
                label: "2025",
                data: [chartData[dataKey][2025][monthIndex]],
                backgroundColor: "#52CDFF",
                borderColor: "#52CDFF",
                borderWidth: 0,
                fill: true
              }
            ]
          },
          options: chartOptions()
        });

        // render legend into legendId
        if (legendId) {
          const html = chart.generateLegend();
          document.getElementById(legendId).innerHTML = html;
        }
        return chart;
      }

      // =======================
      // init charts (default month index = 0 -> JAN)
      // =======================
      let currentMonth = 0;
      const chartEarning = createChart("chartEarning", "legend-year", "earning", currentMonth);
      const chartModal   = createChart("chartModal",   "legend-year",   "modal",   currentMonth);
      const chartProfit  = createChart("chartProfit",  "legend-year",  "profit",  currentMonth);

      // =======================
      // update function (update data + labels + legend)
      // =======================
      function updateAllCharts(monthIndex) {
        function updateChart(chart, legendId, key) {
          chart.data.labels = [months[monthIndex]];
          chart.data.datasets[0].data = [chartData[key][2024][monthIndex]];
          chart.data.datasets[1].data = [chartData[key][2025][monthIndex]];
          chart.update();

          // update legend HTML
          if (legendId) {
            document.getElementById(legendId).innerHTML = chart.generateLegend();
          }
        }

        updateChart(chartEarning, "legend-year", "earning");
        updateChart(chartModal,   "legend-year",   "modal");
        updateChart(chartProfit,  "legend-year",  "profit");
      }

      // =======================
      // dropdown handler: set button text + update charts
      // =======================
      (function attachDropdown() {
        const items = document.querySelectorAll("#monthDropdown .dropdown-item");
        const btn = document.getElementById("filterMonthBtn");

        items.forEach(item => {
          item.addEventListener("click", function (e) {
            e.preventDefault();

            const idx = parseInt(this.getAttribute("data-month"));
            const label = this.innerText.trim();

            // set button text but keep small caret on right
            btn.innerHTML = `${label} <span class="ms-2">&#9662;</span>`;

            updateAllCharts(idx);
          });
        });
      })();
    }


  if ($("#productSold").length) {

      // =======================
      // LABEL BULAN
      // =======================
      const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

      // =======================
      // DUMMY DATA PRODUCT SOLD
      // =======================
      const productSoldData = {
        atasanPria: {
          2024: [496,
                411,
                484,
                460,
                426,
                413,
                429,
                399,
                392,
                456,
                390,
                467 ],
          2025: [387,
                428,
                451,
                391,
                440,
                378,
                426,
                455,
                377,
                446,
                404,
                481 ]
        },
        atasanWanita: {
          2024: [434,
                492,
                507,
                437,
                434,
                509,
                451,
                538,
                442,
                513,
                549,
                548 ],
          2025: [486,
                491,
                438,
                396,
                449,
                494,
                421,
                474,
                473,
                479,
                458,
                520 ]
        },
        bawahanPria: {
          2024: [679,
                669,
                684,
                614,
                684,
                658,
                635,
                645,
                631,
                684,
                629,
                555 ],
          2025: [704,
                605,
                659,
                511,
                638,
                559,
                589,
                622,
                591,
                625,
                597,
                619 ]
        },
        bawahanWanita: {
          2024: [586,
                498,
                587,
                536,
                506,
                578,
                577,
                477,
                558,
                503,
                520,
                571 ],
          2025: [556,
                501,
                579,
                528,
                531,
                499,
                546,
                561,
                536,
                674,
                490,
                590 ]
        }
      };

      // =======================
      // Chart Options
      // =======================
      function chartOptions() {
        return {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              gridLines: { color: "#F0F0F0", drawBorder: false },
              ticks: {
                beginAtZero: true,
                fontSize: 10,
                color: "#6B778C",
              }
            }],
            xAxes: [{
              barPercentage: 0.4,
              gridLines: { display: false },
              ticks: { fontSize: 10, color: "#6B778C" }
            }]
          },
          legend: false,
          legendCallback: function(chart) {
            var text = [];
            text.push('<div class="chartjs-legend"><ul>');
            for (var i = 0; i < chart.data.datasets.length; i++) {
              text.push('<li class="text-muted text-small">');
              text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
              text.push(chart.data.datasets[i].label);
              text.push('</li>');
            }
            text.push('</ul></div>');
            return text.join("");
          }
        };
      }

      // =======================
      // CREATE CHART FUNCTION
      // =======================
      function createChart(canvasId, legendId, key, monthIndex) {
        const ctx = document.getElementById(canvasId).getContext("2d");

        const chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [months[monthIndex]],
            datasets: [
              {
                label: "2024",
                data: [productSoldData[key][2024][monthIndex]],
                backgroundColor: "#1F3BB3"
              },
              {
                label: "2025",
                data: [productSoldData[key][2025][monthIndex]],
                backgroundColor: "#52CDFF"
              }
            ]
          },
          options: chartOptions()
        });

        document.getElementById(legendId).innerHTML = chart.generateLegend();
        return chart;
      }

      // =======================
      // INIT (default month = JAN)
      // =======================
      let currentMonth = 0;

      const chartAtasanPria     = createChart("chartAtasanPria",     "legend-product", "atasanPria", currentMonth);
      const chartAtasanWanita   = createChart("chartAtasanWanita",   "legend-product", "atasanWanita", currentMonth);
      const chartBawahanPria    = createChart("chartBawahanPria",    "legend-product", "bawahanPria", currentMonth);
      const chartBawahanWanita  = createChart("chartBawahanWanita",  "legend-product", "bawahanWanita", currentMonth);

      // =======================
      // UPDATE ALL CHARTS
      // =======================
      function updateAllCharts(monthIndex) {
        function updateChart(chart, key) {
          chart.data.labels = [months[monthIndex]];
          chart.data.datasets[0].data = [productSoldData[key][2024][monthIndex]];
          chart.data.datasets[1].data = [productSoldData[key][2025][monthIndex]];
          chart.update();
        }

        updateChart(chartAtasanPria, "atasanPria");
        updateChart(chartAtasanWanita, "atasanWanita");
        updateChart(chartBawahanPria, "bawahanPria");
        updateChart(chartBawahanWanita, "bawahanWanita");

        document.getElementById("legend-product").innerHTML = chartAtasanPria.generateLegend();
      }

      // =======================
      // DROPDOWN FILTER
      // =======================
      document.querySelectorAll("#monthDropdown .dropdown-item").forEach(item => {
      item.addEventListener("click", function (e) {

        e.preventDefault(); // <--- wajib agar dropdown TIDAK scroll ke atas

        const idx = parseInt(this.dataset.month);
        const label = this.innerText.trim();

        document.getElementById("filterMonthBtn").innerHTML =
          `${label} <span class="ms-2">&#9662;</span>`;

        updateAllCharts(idx);
      });
    });
  }

  // ---- RATING BAR CHART ----
if ($("#ratingChart").length) {
  var ratingChartCanvas = document.getElementById("ratingChart").getContext('2d');

  var ratingChartData = {
      labels: ["1 - 1,99","2 - 2,99", "3 - 3,99", "4 - 4,99", "5"],
      datasets: [{
          label: 'Total',
          data: [168,
                225,
                172,
                235,
                0],
          backgroundColor: "#52CDFF",
          borderColor: ['#52CDFF'],
          borderWidth: 0,
          fill: true,
      }]
  };

  var ratingChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 0,
        bottom: 0
      }
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: true,
          drawBorder: false,
          color: "#F0F0F0",
          zeroLineColor: '#F0F0F0',
        },
        ticks: {
          beginAtZero: true,
          autoSkip: true,
          maxTicksLimit: 5,
          fontSize: 10,
          color: "#6B778C",
          callback: function(value) {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          }
        }
      }],
      xAxes: [{
        stacked: false,
        barPercentage: 0.4,
        categoryPercentage: 0.5,
        gridLines: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          beginAtZero: false,
          autoSkip: true,
          maxTicksLimit: 12,
          fontSize: 10,
          color: "#6B778C"
        }
      }],
    },

    legend: false,

    legendCallback: function(chart) {
      var text = [];
      text.push('<div class="chartjs-legend"><ul>');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        text.push('<li class="text-muted text-small">');
        text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
        text.push(chart.data.datasets[i].label);
        text.push('</li>');
      }
      text.push('</ul></div>');
      return text.join("");
    },

    elements: {
      line: {
        tension: 0.4,
      }
    },

    tooltips: {
      backgroundColor: 'rgba(31, 59, 179, 1)',
      callbacks: {
        label: function(tooltipItem, data) {
          let value = tooltipItem.yLabel.toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
          return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
        }
      }
    }
  };

  var ratingChart = new Chart(ratingChartCanvas, {
      type: 'bar',
      data: ratingChartData,
      options: ratingChartOptions
  });

  document.getElementById('rating-chart-legend').innerHTML =
    ratingChart.generateLegend();
}


  // -------- RATING TABLE --------
if ($("#ratingTable").length) {
  // ================================
  // DUMMY DATA PRODUCT LIST
  // ================================
  // const productData = [
  //       // ======= 1 =======
  //   { id: "P0101", 
  //     name: "Men Black Hoodie Oversize", 
  //     category: "Atasan Pria", 
  //     price: 199000, 
  //     sold: 450, 
  //     date: "2025-03-21", 
  //     rating: 4.8, 
  //     discount: 10, 
  //     stock: 200, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 2 =======
  //   { 
  //     id: "P0102", 
  //     name: "Women Floral Summer Dress", 
  //     category: "Gaun Wanita", 
  //     price: 259000, sold: 400, 
  //     date: "2025-02-10", 
  //     rating: 4.5, 
  //     discount: 12, 
  //     stock: 120, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 3 =======
  //   { 
  //     id: "P0103", 
  //     name: "Men Formal White Shirt Slim Fit", 
  //     category: "Atasan Pria", 
  //     price: 149000, 
  //     sold: 300, 
  //     date: "2024-08-01", 
  //     rating: 4.3, 
  //     discount: 5, 
  //     stock: 85, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 4 =======
  //   { 
  //     id: "P0104", 
  //     name: "Women Casual Sneakers White", 
  //     category: "Sepatu Wanita", 
  //     price: 329000, 
  //     sold: 280, 
  //     date: "2025-05-13", 
  //     rating: 4.7, 
  //     discount: 8, 
  //     stock: 300, 
  //     image: "../../images/asset/logo-02.jpg"
  //   },

  //   // ======= 5 =======  
  //   { 
  //     id: "P0105", 
  //     name: "Kids Polo Shirt", 
  //     category: "Anak", 
  //     price: 89000, 
  //     sold: 270, 
  //     date: "2024-11-20", 
  //     rating: 4.0, 
  //     discount: 2, 
  //     stock: 50,
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 6 =======
  //   { 
  //     id: "P0106", 
  //     name: "Women Slim Fit Jeans Blue", 
  //     category: "Bawahan Wanita", 
  //     price: 209000, 
  //     sold: 260, 
  //     date: "2024-09-14", 
  //     rating: 4.2, 
  //     discount: 10, 
  //     stock: 30, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 7 =======
  //   { 
  //     id: "P0107", 
  //     name: "Men Sport Running Shoes Black", 
  //     category: "Sepatu Pria", 
  //     price: 399000, 
  //     sold: 255, 
  //     date: "2025-01-12", 
  //     rating: 4.6, 
  //     discount: 6, 
  //     stock: 10, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 8 =======
  //   { 
  //     id: "P0108", 
  //     name: "Women Handbag Leather Brown", 
  //     category: "Aksesoris Wanita", 
  //     price: 499000, 
  //     sold: 230, 
  //     date: "2025-06-07", 
  //     rating: 4.9, 
  //     discount: 15, 
  //     stock: 140, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 9 =======
  //   { 
  //     id: "P0109", 
  //     name: "Men Oversized Graphic T-shirt", 
  //     category: "Atasan Pria", 
  //     price: 129000, 
  //     sold: 225, 
  //     date: "2025-07-15", 
  //     rating: 3.9, 
  //     discount: 5, 
  //     stock: 90, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 10 =======
  //   { 
  //     id: "P0110", 
  //     name: "Sport Cap Black Edition", 
  //     category: "Aksesoris Unisex", 
  //     price: 69000, 
  //     sold: 210, 
  //     date: "2024-10-30", 
  //     rating: 4.1, 
  //     discount: 3, 
  //     stock: 300, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   }
  // ];

  let productData = []; // awalnya kosong → diisi dari JSON

  // ================================
  // LOAD JSON
  // ================================
  fetch("../../json/lowSalesTable2 & ratingTable.json")
    .then(res => res.json())
    .then(data => {
      productData = data.sort(() => 0.5 - Math.random()).slice(0, 100);

      console.log("Total product rating data:", productData.length);
      renderTable(filterProducts(selectedYear, selectedMonth, selectedRating));
    })
    .catch(err => console.error("Gagal load JSON:", err));


  // ================================
  // FORMAT TANGGAL
  // ================================
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  // ================================
  // STOCK STATUS FUNCTION
  // ================================
  function getStockStatus(stock) {
    if (stock >= 100) return { text: "In Stock", class: "badge bg-success" };
    if (stock >= 11) return { text: "Warning", class: "badge bg-warning text-dark" };
    return { text: "Low Stock", class: "badge bg-danger" };
  }

  // ================================
  // FILTER FUNCTION
  // ================================
  function filterProducts(year, month, ratingRange) {
    return productData.filter(item => {

      const itemYear = item.date.split("-")[0];
      const itemMonth = item.date.split("-")[1];

      const matchYear = year === "all" || itemYear === year;
      const matchMonth = month === "all" || itemMonth === month;

      // ========== FILTER RATING ==========
      let matchRating = true;
      
      if (ratingRange !== "all") {
        const r = item.rating;

        const rangeStart = Number(ratingRange);
        const rangeEnd = ratingRange === "5" ? 5.99 : rangeStart + 0.99;

        matchRating = r >= rangeStart && r <= rangeEnd;
      }

      return matchYear && matchMonth && matchRating;
    });
  }


  // ================================
  // RENDER TABLE
  // ================================
  function renderTable(filtered) {
    const tbody = document.querySelector("#ratingTableBody");
    tbody.innerHTML = "";

    filtered.forEach(p => {
      const stockInfo = getStockStatus(p.stock);

      tbody.innerHTML += `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${p.image}" class="product-img" alt="">
              <div>
                <h6 class="mb-0">${p.name}</h6>
                <small>${p.id}</small>
              </div>
            </div>
          </td>

          <td>${p.category}</td>
          <td>Rp ${p.price.toLocaleString("id-ID")}</td>
          <td>${p.sold}</td>
          <td>${formatDate(p.date)}</td>
          <td>${p.rating.toFixed(2)}</td>
          <td>${p.discount}%</td>
          <td>${p.stock}</td>
          <td><span class="${stockInfo.class}">${stockInfo.text}</span></td>
        </tr>
      `;
    });
  }


  // ================================
  // DEFAULT STATES
  // ================================
  let selectedYear = "all";
  let selectedMonth = "all";
  let selectedRating = "all";

  // Render awal
  // renderTable(filterProducts(selectedYear, selectedMonth, selectedRating));


  // ================================
  // FILTER YEAR (filter-year-rating)
  // ================================
  document.querySelectorAll(".filter-year-rating").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      selectedYear = this.dataset.year;

      document.getElementById("filterYearRatingBtn").innerHTML =
        (selectedYear === "all" ? "All Years" : selectedYear) +
        ' <span class="ms-1">&#9662;</span>';

      renderTable(filterProducts(selectedYear, selectedMonth, selectedRating));
    });
  });

  // ================================
  // FILTER MONTH (filter-month-rating)
  // ================================
  document.querySelectorAll(".filter-month-rating").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      selectedMonth = this.dataset.month;

      // update label
      document.getElementById("filterMonthRatingLabel").textContent =
        selectedMonth === "all" ? "All Months" : this.innerText.trim();

      renderTable(filterProducts(selectedYear, selectedMonth, selectedRating));
    });
  });

  // ================================
  // FILTER RATING (filter-rating)
  // ================================
  document.querySelectorAll(".filter-rating").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      selectedRating = this.dataset.rating;

      document.getElementById("filterRatingBtn").innerHTML =
        this.innerText + ' <span class="ms-1">&#9662;</span>';

      renderTable(filterProducts(selectedYear, selectedMonth, selectedRating));
    });
  });

}

// -------- EARNING TABLE --------
if ($("#earningTable").length) {

  // ================================
  // DUMMY DATA PRODUCT LIST (with Modal)
  // ================================
  // const productData = [
  //   {
  //     id: "P0767",
  //     name: "Next Look Men Blue Slim Fit Solid Formal Shirt",
  //     category: "Atasan Pria",
  //     price: 104310,
  //     modal: 70000,
  //     sold: 60,
  //     date: "2025-01-24",
  //     rating: 4.51,
  //     discount: 22,
  //     stock: 10,
  //     status: "In Stock",
  //     image: "../../images/asset/logo-02.jpg"
  //   },
  //   {
  //     id: "P0017",
  //     name: "T-Shirt Mini Garis (Crop Top)",
  //     category: "Atasan Wanita",
  //     price: 149000,
  //     modal: 90000,
  //     sold: 250,
  //     date: "2024-08-12",
  //     rating: 4.08,
  //     discount: 2,
  //     stock: 11,
  //     status: "In Stock",
  //     image: "../../images/asset/logo-02.jpg"
  //   },
  //   {
  //     id: "P0296",
  //     name: "Ziyaa Women Grey Printed Kurta With Trousers",
  //     category: "Bawahan Wanita",
  //     price: 198930,
  //     modal: 120000,
  //     sold: 235,
  //     date: "2025-06-30",
  //     rating: 2.2,
  //     discount: 11,
  //     stock: 244,
  //     status: "In Stock",
  //     image: "../../images/asset/logo-02.jpg"
  //   }
  // ];

  let productData = []; // kosong dulu, nanti diisi JSON

  // ================================
  // LOAD JSON (ambil max 100 data)
  // ================================
  fetch("../../json/productEarning.json")
    .then(res => res.json())
    .then(data => {

      // Replace semuanya pakai JSON
      productData = data.sort(() => 0.5 - Math.random()).slice(0, 100);

      console.log("Total data dari JSON:", productData.length);

      // Render setelah data siap
      renderTable(filterProducts(selectedYear, selectedMonth));
    })
    .catch(err => console.error("Gagal load JSON:", err));

  // ================================
  // FILTER FUNCTION
  // ================================
  function filterProducts(year, month) {
    return productData.filter(item => {
      const itemYear = item.date.split("-")[0];
      const itemMonth = item.date.split("-")[1];

      const matchYear = year === "all" || itemYear === year;
      const matchMonth = month === "all" || itemMonth === month;

      return matchYear && matchMonth;
    });
  }

  // ================================
  // DATE FORMATTER
  // ================================
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  // ================================
  // STOCK STATUS
  // ================================
  function getStockStatus(stock) {
    if (stock >= 100) return { text: "In Stock", class: "badge bg-success" };
    if (stock >= 11) return { text: "Warning", class: "badge bg-warning text-dark" };
    return { text: "Low Stock", class: "badge bg-danger" };
  }

  // ================================
  // RENDER TABLE
  // ================================
  function renderTable(filtered) {
    const tbody = document.querySelector("#earningProductTableBody");
    tbody.innerHTML = "";

    filtered.forEach(p => {
      const stockInfo = getStockStatus(p.stock);

      tbody.innerHTML += `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${p.image}" class="product-img" alt="">
              <div>
                <h6 class="mb-0">${p.name}</h6>
                <small>${p.id}</small>
              </div>
            </div>
          </td>

          <td>${p.category}</td>
          <td>Rp ${p.price.toLocaleString("id-ID")}</td>
          <td>Rp ${p.modal.toLocaleString("id-ID")}</td>
          <td>${p.sold}</td>
          <td>${formatDate(p.date)}</td>
          <td>${p.rating}</td>
          <td>${p.discount}%</td>
          <td>${p.stock}</td>
          <td><span class="${stockInfo.class}">${stockInfo.text}</span></td>
        </tr>
      `;
    });
  }

  // DEFAULT FILTER
  let selectedYear = "all";
  let selectedMonth = "all";

  // renderTable(filterProducts(selectedYear, selectedMonth));

  // ================================
  // EVENT YEAR FILTER
  // ================================
  document.querySelectorAll(".filter-year-earning").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      selectedYear = this.dataset.year;

      document.getElementById("filterEarningTableYearBtn").innerHTML =
        (selectedYear === "all" ? "All Years" : selectedYear) +
        ' <span class="ms-1">&#9662;</span>';

      renderTable(filterProducts(selectedYear, selectedMonth));
    });
  });

  // ================================
  // EVENT MONTH FILTER
  // ================================
  document.querySelectorAll(".filter-earning-month").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      selectedMonth = this.dataset.month;

      const monthName = this.innerText.trim();
      document.getElementById("filterEarningTableMonthLabel").textContent =
        selectedMonth === "all" ? "All Months" : monthName;

      renderTable(filterProducts(selectedYear, selectedMonth));
    });
  });

}


  // -------- REC TABLE --------
  if ($("#recTable").length){
    // ================================
    // DUMMY DATA PRODUCT LIST
    // ================================
    const productData = [
      {
        id: "P0767",
        name: "Next Look Men Blue Slim Fit Solid Formal Shirt",
        category: "Atasan Pria",
        price: 104310,
        sold: 60,
        date: "2025-01-24",
        rating: 4.51,
        discount: 22,
        stock: 10,
        status: "In Stock",
        image: "./images/asset/logo-02.jpg"
      },
      {
        id: "P0017",
        name: "T-Shirt Mini Garis (Crop Top)",
        category: "Atasan Wanita",
        price: 149000,
        sold: 250,
        date: "2024-08-12",
        rating: 4.08,
        discount: 2,
        stock: 11,
        status: "In Stock",
        image: "./images/asset/logo-02.jpg"
      },
      {
        id: "P0296",
        name: "Ziyaa Women Grey Printed Kurta With Trousers",
        category: "Bawahan Wanita",
        price: 198930,
        sold: 235,
        date: "2025-06-30",
        rating: 2.2,
        discount: 11,
        stock: 244,
        status: "In Stock",
        image: "./images/asset/logo-02.jpg"
      }
    ];


    // ================================
    // FILTER FUNCTION
    // ================================
    function filterProducts(year, month) {
      return productData.filter(item => {
        const itemYear = item.date.split("-")[0];
        const itemMonth = item.date.split("-")[1];

        const matchYear = year === "all" || itemYear === year;
        const matchMonth = month === "all" || itemMonth === month;

        return matchYear && matchMonth;
      });
    }


    // ================================
    // FORMAT TANGGAL
    // ================================
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });
    }

    // ================================
    // STOCK STATUS FUNCTION
    // ================================
    function getStockStatus(stock) {
      if (stock >= 100) {
        return { text: "In Stock", class: "badge bg-success" }; // hijau
      }
      if (stock >= 11) {
        return { text: "Warning", class: "badge bg-warning text-dark" }; // kuning
      }
      return { text: "Low Stock", class: "badge bg-danger" }; // merah
    }

    // ================================
    // RENDER TABLE
    // ================================
    function renderTable(filtered) {
      const tbody = document.querySelector("#recProductTableBody");
      tbody.innerHTML = "";

      filtered.forEach(p => {

        const stockInfo = getStockStatus(p.stock);

        tbody.innerHTML += `
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img src="${p.image}" class="product-img" alt="">
                <div>
                  <h6 class="mb-0">${p.name}</h6>
                  <small>${p.id}</small>
                </div>
              </div>
            </td>

            <td>${p.category}</td>
            <td>Rp ${p.price.toLocaleString("id-ID")}</td>
            <td>${p.sold}</td>
            <td>${formatDate(p.date)}</td>
            <td>${p.rating}</td>
            <td>${p.discount}%</td>
            <td>${p.stock}</td>

            <td><span class="${stockInfo.class}">${stockInfo.text}</span></td>
          </tr>
        `;
      });
    }

    // ================================
    // DEFAULT FILTER STATE
    // ================================
    let selectedYear = "all";
    let selectedMonth = "all";

    // Render awal
    renderTable(filterProducts(selectedYear, selectedMonth));
    GLOBAL_DATA.recommendations = filterProducts(selectedYear, selectedMonth);


    // ================================
    // EVENT YEAR FILTER
    // ================================
    document.querySelectorAll(".filter-year-rec").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault(); // ⛔ stop page jumping

        selectedYear = this.dataset.year;

        document.getElementById("filterYearRecBtn").innerHTML =
        (selectedYear === "all" ? "All Years" : selectedYear) +
        ' <span class="ms-1">&#9662;</span>';

        renderTable(filterProducts(selectedYear, selectedMonth));
        GLOBAL_DATA.recommendations = filterProducts(selectedYear, selectedMonth);
      });
    });

    // ================================
    // EVENT MONTH FILTER
    // ================================
    document.querySelectorAll(".filter-month").forEach(btn => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();

        const m = this.dataset.month;
        selectedMonth = m === "all" ? "all" : m;

        const monthName = this.innerText.trim();

        // Update label bulan tanpa ganggu arrow
        document.getElementById("filterMonthLabel").textContent =
          selectedMonth === "all" ? "All Months" : monthName;

        // update tabel kamu
        renderTable(filterProducts(selectedYear, selectedMonth));
        GLOBAL_DATA.recommendations = filterProducts(selectedYear, selectedMonth);
      });
    });



  }

// =============================
// REC TABLE 2 (TOP 10 SALES)
// =============================
if ($("#recTable2").length) {

  // ===============================================
  // DUMMY PRODUCT DATA (10 items)
  // ===============================================
  // const productData2 = [
  //   // ======= 1 =======
  //   {
  //     id: "P0001",
  //     name: "Free authority men white batman printed t-shirt",
  //     category: "Atasan pria",
  //     price: 85310,
  //     sold: 36,
  //     date: "2025-12-29",
  //     rating: 3.01,
  //     discount: 0.1,
  //     stock: 247,
  //     image: "../../images/asset/logo-02.jpg"
  //   },
    
  //   // ======= 2 =======
  //   { 
  //     id: "P0102", 
  //     name: "Women Floral Summer Dress", 
  //     category: "Gaun Wanita", 
  //     price: 259000, 
  //     sold: 400, 
  //     date: "2025-02-10", 
  //     rating: 4.5, 
  //     discount: 12, 
  //     stock: 120, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 3 =======
  //   { 
  //     id: "P0103", 
  //     name: "Men Formal White Shirt Slim Fit", 
  //     category: "Atasan Pria", 
  //     price: 149000, 
  //     sold: 300, 
  //     date: "2024-08-01", 
  //     rating: 4.3, 
  //     discount: 5, 
  //     stock: 85, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 4 =======
  //   { 
  //     id: "P0104", 
  //     name: "Women Casual Sneakers White", 
  //     category: "Sepatu Wanita", 
  //     price: 329000, 
  //     sold: 280, 
  //     date: "2025-05-13", 
  //     rating: 4.7, 
  //     discount: 8, 
  //     stock: 300, 
  //     image: "../../images/asset/logo-02.jpg"
  //   },

  //   // ======= 5 =======  
  //   { 
  //     id: "P0105", 
  //     name: "Kids Polo Shirt", 
  //     category: "Anak", 
  //     price: 89000, 
  //     sold: 270, 
  //     date: "2024-11-20", 
  //     rating: 4.0, 
  //     discount: 2, 
  //     stock: 50,
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 6 =======
  //   { 
  //     id: "P0106", 
  //     name: "Women Slim Fit Jeans Blue", 
  //     category: "Bawahan Wanita", 
  //     price: 209000, 
  //     sold: 260, 
  //     date: "2024-09-14", 
  //     rating: 4.2, 
  //     discount: 10, 
  //     stock: 30, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 7 =======
  //   { 
  //     id: "P0107", 
  //     name: "Men Sport Running Shoes Black", 
  //     category: "Sepatu Pria", 
  //     price: 399000, 
  //     sold: 255, 
  //     date: "2025-01-12", 
  //     rating: 4.6, 
  //     discount: 6, 
  //     stock: 10, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 8 =======
  //   { 
  //     id: "P0108", 
  //     name: "Women Handbag Leather Brown", 
  //     category: "Aksesoris Wanita", 
  //     price: 499000, 
  //     sold: 230, 
  //     date: "2025-06-07", 
  //     rating: 4.9, 
  //     discount: 15, 
  //     stock: 140, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 9 =======
  //   { 
  //     id: "P0109", 
  //     name: "Men Oversized Graphic T-shirt", 
  //     category: "Atasan Pria", 
  //     price: 129000, 
  //     sold: 225, 
  //     date: "2025-07-15", 
  //     rating: 3.9, 
  //     discount: 5, 
  //     stock: 90, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 10 =======
  //   { 
  //     id: "P0110", 
  //     name: "Sport Cap Black Edition", 
  //     category: "Aksesoris Unisex", 
  //     price: 69000, 
  //     sold: 210, 
  //     date: "2024-10-30", 
  //     rating: 4.1, 
  //     discount: 3, 
  //     stock: 300, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   }
  // ];


  let productData2 = []; // INI YANG DIPAKAI FILTER & RENDER

  fetch("../../json/recTable2.json")
    .then(res => res.json())
    .then(data => {
      productData2 = data;
      console.log("Data loaded:", productData2.length);
      renderTable2(filterProducts2(selectedYear2, selectedMonth2));
    })
    .catch(err => console.error("JSON Load Error:", err));



  // ===============================================
  // FILTER FUNCTION
  // ===============================================
  function filterProducts2(year, month) {
    return productData2
      .sort((a, b) => b.sold - a.sold) // Highest Sales
      .filter(item => {
        const [itemYear, itemMonth] = item.date.split("-");

        const matchYear = year === "all" || itemYear === year;
        const matchMonth = month === "all" || itemMonth === month;

        return matchYear && matchMonth;
      })
      .slice(0, 100); // Limit Top 10
  }


  // ===============================================
  // DATE FORMATTER
  // ===============================================
  function formatDate2(dateStr) {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }


  // ===============================================
  // STOCK STATUS STYLE
  // ===============================================
  function getStockStatus2(stock) {
    if (stock >= 100) {
      return { text: "In Stock", class: "badge bg-success" }; 
    }
    if (stock >= 11) {
      return { text: "Warning", class: "badge bg-warning text-dark" }; 
    }
    return { text: "Low Stock", class: "badge bg-danger" }; 
  }


  // ===============================================
  // RENDER TABLE
  // ===============================================
  function renderTable2(filtered) {
    const tbody = document.getElementById("recProductTableBody2");
    tbody.innerHTML = "";

    filtered.forEach(p => {
      const stockInfo = getStockStatus2(p.stock);

      tbody.innerHTML += `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${p.image}" class="product-img" alt="">
              <div>
                <h6 class="mb-0">${p.name}</h6>
                <small>${p.id}</small>
              </div>
            </div>
          </td>

          <td>${p.category}</td>
          <td>Rp ${p.price.toLocaleString("id-ID")}</td>
          <td>${p.sold}</td>
          <td>${formatDate2(p.date)}</td>
          <td>${p.rating}</td>
          <td>${p.discount}%</td>
          <td>${p.stock}</td>

          <td><span class="${stockInfo.class}">${stockInfo.text}</span></td>
        </tr>
      `;
    });
  }


  // ===============================================
  // DEFAULT
  // ===============================================
  let selectedYear2 = "all";
  let selectedMonth2 = "all";

  // renderTable2(filterProducts2(selectedYear2, selectedMonth2));


  // ===============================================
  // YEAR FILTER EVENT
  // ===============================================
  document.querySelectorAll(".filter-year-2").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      selectedYear2 = this.dataset.year;

      document.getElementById("filterYear2Btn").innerHTML =
        (selectedYear2 === "all" ? "All Years" : selectedYear2) +
        ' <span class="ms-1">&#9662;</span>';

      renderTable2(filterProducts2(selectedYear2, selectedMonth2));
    });
  });


  // ===============================================
  // MONTH FILTER EVENT
  // ===============================================
  document.querySelectorAll(".filter-month-2").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      selectedMonth2 = this.dataset.month;

      const monthText = this.innerText.trim();
      document.getElementById("filterMonth2Label").textContent =
        selectedMonth2 === "all" ? "All Months" : monthText;

      renderTable2(filterProducts2(selectedYear2, selectedMonth2));
    });
  });

}


 // -------- LOW SALES TABLE --------
if ($("#lowSalesTable").length) {
  // ================================
  // DUMMY DATA PRODUCT LIST
  // ================================
  const productData = [
    {
      id: "P0604",
      name: "Ed Hardy Grey Printed Jacket",
      category: "Atasan Pria",
      price: 503310,
      sold: 3,
      date: "2025-10-4",
      rating: 1.98,
      discount: 3,
      stock: 657,
      image: "./images/asset/logo-02.jpg"
    },
    {
      id: "P0186",
      name: "Alcis Women Charcoal Grey Solid Sporty Sacket",
      category: "Atasan Pria",
      price: 379810,
      sold: 3,
      date: "2025-03-1",
      rating: 2.46,
      discount: 4,
      stock: 65,
      image: "./images/asset/logo-02.jpg"
    },
    {
      id: "P0264",
      name: "Mango Women Beige & Grey Printed Round Neck T-Shirt",
      category: "Atasan Wanita",
      price: 378100,
      sold: 9,
      date: "2024-11-30",
      rating: 1.5,
      discount: 5,
      stock: 2,
      image: "./images/asset/logo-02.jpg"
    }
  ];

  // ================================
  // FILTER FUNCTION
  // ================================
  function filterProducts(year, month) {
    return productData.filter(item => {
      const itemYear = item.date.split("-")[0];
      const itemMonth = item.date.split("-")[1];

      const matchYear = year === "all" || itemYear === year;
      const matchMonth = month === "all" || itemMonth === month;

      return matchYear && matchMonth;
    });
  }

  // ================================
  // FORMAT TANGGAL
  // ================================
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  // ================================
  // STOCK STATUS FUNCTION
  // ================================
  function getStockStatus(stock) {
    if (stock >= 100) {
      return { text: "In Stock", class: "badge bg-success" }; 
    }
    if (stock >= 11) {
      return { text: "Warning", class: "badge bg-warning text-dark" }; 
    }
    return { text: "Low Stock", class: "badge bg-danger" }; 
  }

  // ================================
  // RENDER TABLE
  // ================================
  function renderTable(filtered) {
    const tbody = document.querySelector("#lowSalesTableBody");
    tbody.innerHTML = "";

    filtered.forEach(p => {
      const stockInfo = getStockStatus(p.stock);

      tbody.innerHTML += `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${p.image}" class="product-img" alt="">
              <div>
                <h6 class="mb-0">${p.name}</h6>
                <small>${p.id}</small>
              </div>
            </div>
          </td>

          <td>${p.category}</td>
          <td>Rp ${p.price.toLocaleString("id-ID")}</td>
          <td>${p.sold}</td>
          <td>${formatDate(p.date)}</td>
          <td>${p.rating}</td>
          <td>${p.discount}%</td>
          <td>${p.stock}</td>
          <td><span class="${stockInfo.class}">${stockInfo.text}</span></td>
        </tr>
      `;
    });
  }

  // ================================
  // DEFAULT FILTER STATE
  // ================================
  let selectedYear = "all";
  let selectedMonth = "all";

  // Render awal
  renderTable(filterProducts(selectedYear, selectedMonth));
  GLOBAL_DATA.lowSales = productData.filter(p => p.sold < 100);

  // ================================
  // EVENT YEAR FILTER
  // ================================
  document.querySelectorAll(".lowSales-filter-year").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      selectedYear = this.dataset.year;

      document.getElementById("lowSalesYearBtn").innerHTML =
        (selectedYear === "all" ? "All Years" : selectedYear) +
        ' <span class="ms-1">&#9662;</span>';

      renderTable(filterProducts(selectedYear, selectedMonth));
      GLOBAL_DATA.lowSales = productData.filter(p => p.sold < 100);
    });
  });

  // ================================
  // EVENT MONTH FILTER
  // ================================
  document.querySelectorAll(".lowSales-filter-month").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const m = this.dataset.month;
      selectedMonth = m === "all" ? "all" : m;

      const monthName = this.innerText.trim();

      document.getElementById("lowSalesMonthLabel").textContent =
        selectedMonth === "all" ? "All Months" : monthName;

      renderTable(filterProducts(selectedYear, selectedMonth));
      GLOBAL_DATA.lowSales = productData.filter(p => p.sold < 100);
    });
  });
}

// =====================================================
// LOW SALES TABLE 2 (LOWEST SALES PRODUCT)
// =====================================================
if ($("#lowSalesTable2").length) {
  // const lowSalesProductData2 = [
  //   // ======= 1 =======
  //   { id: "P0101", 
  //     name: "Men Black Hoodie Oversize", 
  //     category: "Atasan Pria", 
  //     price: 199000, 
  //     sold: 450, 
  //     date: "2025-03-21", 
  //     rating: 4.8, 
  //     discount: 10, 
  //     stock: 10, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 2 =======
  //   { 
  //     id: "P0102", 
  //     name: "Women Floral Summer Dress", 
  //     category: "Gaun Wanita", 
  //     price: 259000, sold: 400, 
  //     date: "2025-02-10", 
  //     rating: 4.5, 
  //     discount: 12, 
  //     stock: 120, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 3 =======
  //   { 
  //     id: "P0103", 
  //     name: "Men Formal White Shirt Slim Fit", 
  //     category: "Atasan Pria", 
  //     price: 149000, 
  //     sold: 300, 
  //     date: "2024-08-01", 
  //     rating: 4.3, 
  //     discount: 5, 
  //     stock: 85, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 4 =======
  //   { 
  //     id: "P0104", 
  //     name: "Women Casual Sneakers White", 
  //     category: "Sepatu Wanita", 
  //     price: 329000, 
  //     sold: 280, 
  //     date: "2025-05-13", 
  //     rating: 4.7, 
  //     discount: 8, 
  //     stock: 300, 
  //     image: "../../images/asset/logo-02.jpg"
  //   },

  //   // ======= 5 =======  
  //   { 
  //     id: "P0105", 
  //     name: "Kids Polo Shirt", 
  //     category: "Anak", 
  //     price: 89000, 
  //     sold: 270, 
  //     date: "2024-11-20", 
  //     rating: 4.0, 
  //     discount: 2, 
  //     stock: 50,
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 6 =======
  //   { 
  //     id: "P0106", 
  //     name: "Women Slim Fit Jeans Blue", 
  //     category: "Bawahan Wanita", 
  //     price: 209000, 
  //     sold: 260, 
  //     date: "2024-09-14", 
  //     rating: 4.2, 
  //     discount: 10, 
  //     stock: 30, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 7 =======
  //   { 
  //     id: "P0107", 
  //     name: "Men Sport Running Shoes Black", 
  //     category: "Sepatu Pria", 
  //     price: 399000, 
  //     sold: 255, 
  //     date: "2025-01-12", 
  //     rating: 4.6, 
  //     discount: 6, 
  //     stock: 10, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 8 =======
  //   { 
  //     id: "P0108", 
  //     name: "Women Handbag Leather Brown", 
  //     category: "Aksesoris Wanita", 
  //     price: 499000, 
  //     sold: 230, 
  //     date: "2025-06-07", 
  //     rating: 4.9, 
  //     discount: 15, 
  //     stock: 140, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 9 =======
  //   { 
  //     id: "P0109", 
  //     name: "Men Oversized Graphic T-shirt", 
  //     category: "Atasan Pria", 
  //     price: 129000, 
  //     sold: 225, 
  //     date: "2025-07-15", 
  //     rating: 3.9, 
  //     discount: 5, 
  //     stock: 90, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 10 =======
  //   { 
  //     id: "P0110", 
  //     name: "Sport Cap Black Edition", 
  //     category: "Aksesoris Unisex", 
  //     price: 69000, 
  //     sold: 210, 
  //     date: "2024-10-30", 
  //     rating: 4.1, 
  //     discount: 3, 
  //     stock: 300, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   }
  // ];

  

  let sortFieldLow2 = null;
  let sortDirectionLow2 = 'asc'; // asc / desc
  let lowSalesProductData2 = []; // <- kosong dulu

  // Load JSON dari folder data
  fetch("../../json/lowSalesTable2 & ratingTable.json")
    .then(response => response.json())
    .then(data => {
      lowSalesProductData2 = data;

      // Render setelah data selesai load
      renderLowSalesTable2(filterLowSalesProducts2(selectedLowYear2, selectedLowMonth2));
    })
    .catch(err => console.error("Gagal load JSON:", err));




  // ===============================================
  // FILTER FUNCTION (Low Sales ASC)
  // ===============================================
  function filterLowSalesProducts2(year, month) {
    return lowSalesProductData2
      .sort((a, b) => a.sold - b.sold)
      .filter(item => {
        const [itemYear, itemMonth] = item.date.split("-");

        const matchYear = year === "all" || itemYear === year;
        const matchMonth = month === "all" || itemMonth === month;

        return matchYear && matchMonth;
      })
      .slice(0, 100);
  }


  // ===============================================
  // DATE FORMATTER
  // ===============================================
  function formatDateLow2(dateStr) {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }


  // ===============================================
  // STOCK STATUS STYLE
  // ===============================================
    function getStockStatusLow2(stock) {
      if (stock >= 100) {
        return { text: "In Stock", class: "badge bg-success" }; 
      }
      if (stock >= 11) {
        return { text: "Warning", class: "badge bg-warning text-dark" }; 
      }
      return { text: "Low Stock", class: "badge bg-danger" }; 
    }

    function sortLowSalesData(data) {
    if (!sortFieldLow2) return data;

    return data.sort((a, b) => {
      let valA = a[sortFieldLow2];
      let valB = b[sortFieldLow2];

      // Convert date
      if (sortFieldLow2 === "date") {
        valA = new Date(valA);
        valB = new Date(valB);
      }

      if (typeof valA === "string") {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      if (sortDirectionLow2 === 'asc') {
        return valA > valB ? 1 : -1;
      } else {
        return valA < valB ? 1 : -1;
      }
    });
  }


  // ===============================================
  // RENDER TABLE
  // ===============================================
  function renderLowSalesTable2(filtered) {
    filtered = sortLowSalesData(filtered); // apply sorting

    const tbody = document.getElementById("lowSalesProductTableBody2");
    tbody.innerHTML = "";

    filtered.forEach(p => {
      const stockInfo = getStockStatusLow2(p.stock);

      tbody.innerHTML += `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${p.image}" class="product-img" alt="">
              <div>
                <h6 class="mb-0">${p.name}</h6>
                <small>${p.id}</small>
              </div>
            </div>
          </td>
          <td>${p.category}</td>
          <td>Rp ${p.price.toLocaleString("id-ID")}</td>
          <td>${p.sold}</td>
          <td>${formatDateLow2(p.date)}</td>
          <td>${p.rating}</td>
          <td>${p.discount}%</td>
          <td>${p.stock}</td>
          <td><span class="${stockInfo.class}">${stockInfo.text}</span></td>
        </tr>
      `;
    });
  }


  // ===============================================
  // DEFAULT
  // ===============================================
  let selectedLowYear2 = "all";
  let selectedLowMonth2 = "all";

  // renderLowSalesTable2(filterLowSalesProducts2(selectedLowYear2, selectedLowMonth2));


  // ===============================================
  // YEAR FILTER EVENT
  // ===============================================
  document.querySelectorAll(".filter-year-low-2").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      selectedLowYear2 = this.dataset.year;

      document.getElementById("filterYearLow2Btn").innerHTML =
        (selectedLowYear2 === "all" ? "All Years" : selectedLowYear2) +
        ' <span class="ms-1">&#9662;</span>';

      renderLowSalesTable2(filterLowSalesProducts2(selectedLowYear2, selectedLowMonth2));
    });
  });


  // ===============================================
  // MONTH FILTER EVENT
  // ===============================================
  document.querySelectorAll(".filter-month-low-2").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      selectedLowMonth2 = this.dataset.month;

      const monthText = this.innerText.trim();
      document.getElementById("filterMonthLow2Label").textContent =
        selectedLowMonth2 === "all" ? "All Months" : monthText;

      renderLowSalesTable2(filterLowSalesProducts2(selectedLowYear2, selectedLowMonth2));
    });
  });

    document.querySelectorAll("#lowSalesTable2 th.sortable").forEach(th => {
    th.addEventListener("click", function () {
      const field = this.dataset.field;

      // toggle direction
      if (sortFieldLow2 === field) {
        sortDirectionLow2 = sortDirectionLow2 === "asc" ? "desc" : "asc";
      } else {
        sortFieldLow2 = field;
        sortDirectionLow2 = "desc";
      }

      renderLowSalesTable2(filterLowSalesProducts2(selectedLowYear2, selectedLowMonth2));

      // update icon
      document.querySelectorAll("#lowSalesTable2 .sort-icon").forEach(icon => {
        icon.textContent = "▲▼";
      });

      const icon = this.querySelector(".sort-icon");
      icon.textContent = sortDirectionLow2 === "desc" ? "▲" : "▼";
    });
  });

}

// =====================================================
// LOW STOCK TABLE 
// =====================================================
if ($("#lowStockTable").length) {
  // ================================
  // DUMMY DATA PRODUCT LIST
  // ================================
  const lowStockData = [
    {
      id: "P0604",
      name: "Ed Hardy Grey Printed Jacket",
      category: "Atasan Pria",
      price: 503310,
      sold: 3,
      date: "2024-10-4",
      rating: 1.98,
      discount: 3,
      stock: 3,
      image: "./images/asset/logo-02.jpg"
    },
    {
      id: "P0186",
      name: "Alcis Women Charcoal Grey Solid Sporty Sacket",
      category: "Atasan Pria",
      price: 379810,
      sold: 3,
      date: "2025-03-1",
      rating: 2.46,
      discount: 4,
      stock: 1,
      image: "./images/asset/logo-02.jpg"
    },
    {
      id: "P0264",
      name: "Mango Women Beige & Grey Printed Round Neck T-Shirt",
      category: "Atasan Wanita",
      price: 378100,
      sold: 9,
      date: "2025-11-30",
      rating: 1.5,
      discount: 5,
      stock: 2,
      image: "./images/asset/logo-02.jpg"
    }
  ];

  // ================================
  // FILTER BASED ON YEAR & MONTH
  // ================================
  function filterLowStock(year, month) {
    return lowStockData.filter(item => {
      const itemYear = item.date.split("-")[0];
      const itemMonth = item.date.split("-")[1];

      const matchYear = year === "all" || itemYear === year;
      const matchMonth = month === "all" || itemMonth === month;

      return matchYear && matchMonth;
    });
  }

  // ================================
  // FORMAT DATE
  // ================================
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric"
    });
  }

  // ================================
  // STOCK STATUS FUNCTION
  // ================================
  function getStockStatus(stock) {
    if (stock >= 100) {
      return { text: "In Stock", class: "badge bg-success" };
    }
    if (stock >= 11) {
      return { text: "Warning", class: "badge bg-warning text-dark" };
    }
    return { text: "Low Stock", class: "badge bg-danger" };
  }

  // ================================
  // RENDER TABLE (TOP 3 LOW STOCK)
  // ================================
  function renderLowStockTable(filtered) {
    const tbody = document.querySelector("#lowStockTableBody");
    tbody.innerHTML = "";

    const top3 = filtered.sort((a, b) => a.stock - b.stock).slice(0, 3);

    top3.forEach(p => {
      const stockInfo = getStockStatus(p.stock);

      tbody.innerHTML += `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${p.image}" class="product-img" alt="">
              <div>
                <h6 class="mb-0">${p.name}</h6>
                <small>${p.id}</small>
              </div>
            </div>
          </td>

          <td>${p.category}</td>
          <td>Rp ${p.price.toLocaleString("id-ID")}</td>
          <td>${p.sold}</td>
          <td>${formatDate(p.date)}</td>
          <td>${p.rating}</td>
          <td>${p.discount}%</td>
          <td>${p.stock}</td>
          <td><span class="${stockInfo.class}">${stockInfo.text}</span></td>
        </tr>
      `;
    });
  }

  // ================================
  // DEFAULT FILTERS
  // ================================
  let lowStockYear = "all";
  let lowStockMonth = "all";

  // Render pertama
  renderLowStockTable(filterLowStock(lowStockYear, lowStockMonth));
  GLOBAL_DATA.lowStock = lowStockData.filter(p => p.stock < 20);

  // ================================
  // EVENT YEAR FILTER
  // ================================
  document.querySelectorAll(".lowStock-filter-year").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      lowStockYear = this.dataset.year;

      document.getElementById("lowStockYearBtn").innerHTML =
        (lowStockYear === "all" ? "All Years" : lowStockYear) +
        ' <span class="ms-1">&#9662;</span>';

      renderLowStockTable(filterLowStock(lowStockYear, lowStockMonth));
      GLOBAL_DATA.lowStock = lowStockData.filter(p => p.stock < 20);
    });
  });

  // ================================
  // EVENT MONTH FILTER
  // ================================
  document.querySelectorAll(".lowStock-filter-month").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      lowStockMonth = this.dataset.month;

      const monthLabel = this.innerText.trim();
      document.getElementById("lowStockMonthLabel").textContent =
        lowStockMonth === "all" ? "All Months" : monthLabel;

      renderLowStockTable(filterLowStock(lowStockYear, lowStockMonth));
      GLOBAL_DATA.lowStock = lowStockData.filter(p => p.stock < 20);
    });
  });

}


// ================================
// LOW STOCK TABLE 2 
// ================================
if ($("#lowStockTable2").length) {

  // const lowStockData2 = [
  //   // ======= 1 =======
  //   { id: "P0101", 
  //     name: "Men Black Hoodie Oversize", 
  //     category: "Atasan Pria", 
  //     price: 199000, 
  //     sold: 450, 
  //     date: "2025-03-21", 
  //     rating: 4.8, 
  //     discount: 10, 
  //     stock: 200, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 2 =======
  //   { 
  //     id: "P0102", 
  //     name: "Women Floral Summer Dress", 
  //     category: "Gaun Wanita", 
  //     price: 259000, sold: 400, 
  //     date: "2025-02-10", 
  //     rating: 4.5, 
  //     discount: 12, 
  //     stock: 120, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 3 =======
  //   { 
  //     id: "P0103", 
  //     name: "Men Formal White Shirt Slim Fit", 
  //     category: "Atasan Pria", 
  //     price: 149000, 
  //     sold: 300, 
  //     date: "2024-08-01", 
  //     rating: 4.3, 
  //     discount: 5, 
  //     stock: 85, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },
    
  //   // ======= 4 =======
  //   { 
  //     id: "P0104", 
  //     name: "Women Casual Sneakers White", 
  //     category: "Sepatu Wanita", 
  //     price: 329000, 
  //     sold: 280, 
  //     date: "2025-05-13", 
  //     rating: 4.7, 
  //     discount: 8, 
  //     stock: 300, 
  //     image: "../../images/asset/logo-02.jpg"
  //   },

  //   // ======= 5 =======  
  //   { 
  //     id: "P0105", 
  //     name: "Kids Polo Shirt", 
  //     category: "Anak", 
  //     price: 89000, 
  //     sold: 270, 
  //     date: "2024-11-20", 
  //     rating: 4.0, 
  //     discount: 2, 
  //     stock: 50,
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 6 =======
  //   { 
  //     id: "P0106", 
  //     name: "Women Slim Fit Jeans Blue", 
  //     category: "Bawahan Wanita", 
  //     price: 209000, 
  //     sold: 260, 
  //     date: "2024-09-14", 
  //     rating: 4.2, 
  //     discount: 10, 
  //     stock: 30, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 7 =======
  //   { 
  //     id: "P0107", 
  //     name: "Men Sport Running Shoes Black", 
  //     category: "Sepatu Pria", 
  //     price: 399000, 
  //     sold: 255, 
  //     date: "2025-01-12", 
  //     rating: 4.6, 
  //     discount: 6, 
  //     stock: 10, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 8 =======
  //   { 
  //     id: "P0108", 
  //     name: "Women Handbag Leather Brown", 
  //     category: "Aksesoris Wanita", 
  //     price: 499000, 
  //     sold: 230, 
  //     date: "2025-06-07", 
  //     rating: 4.9, 
  //     discount: 15, 
  //     stock: 140, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 9 =======
  //   { 
  //     id: "P0109", 
  //     name: "Men Oversized Graphic T-shirt", 
  //     category: "Atasan Pria", 
  //     price: 129000, 
  //     sold: 225, 
  //     date: "2025-07-15", 
  //     rating: 3.9, 
  //     discount: 5, 
  //     stock: 90, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   },

  //   // ======= 10 =======
  //   { 
  //     id: "P0110", 
  //     name: "Sport Cap Black Edition", 
  //     category: "Aksesoris Unisex", 
  //     price: 69000, 
  //     sold: 210, 
  //     date: "2024-10-30", 
  //     rating: 4.1, 
  //     discount: 3, 
  //     stock: 300, 
  //     image: "../../images/asset/logo-02.jpg" 
  //   }
  // ];

  let lowStockData2 = []; // kosong dulu, nanti terisi dari JSON

  // ===== Load JSON =====
  fetch("../../json/lowStockTable2.json")
    .then(res => res.json())
    .then(data => {
      lowStockData2 = data;

      console.log("Total data loaded:", lowStockData2.length);
      renderLowStockTable2(filterLowStockProducts2(selectedLowStockYear2, selectedLowStockMonth2));
    })
    .catch(err => console.error("Gagal load JSON:", err));

  // ================================
  // FILTER LOGIC
  // ================================
  function filterLowStockProducts2(year, month) {
    return lowStockData2
      .sort((a, b) => a.sold - b.sold)
      .filter(item => {
        const [itemYear, itemMonth] = item.date.split("-");
        return (year === "all" || itemYear === year) &&
               (month === "all" || itemMonth === month);
      })
      .slice(0, 100);
  }

  // ================================
  // DATE FORMAT
  // ================================
  function formatDateLowStock2(dateStr) {
    return new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
  }

  // ================================
  // STOCK STATUS
  // ================================
  function getStockStatusLowStock2(stock) {
    if (stock >= 100) return { text: "In Stock", class: "badge bg-success" };
    if (stock >= 11) return { text: "Warning", class: "badge bg-warning text-dark" };
    return { text: "Low Stock", class: "badge bg-danger" };
  }

  // ================================
  // RENDER TABLE
  // ================================
  function renderLowStockTable2(filtered) {
    const tbody = document.getElementById("lowStockTableBody2");
    tbody.innerHTML = "";

    filtered.forEach(p => {
      const stockInfo = getStockStatusLowStock2(p.stock);

      tbody.innerHTML += `
        <tr>
          <td>
            <div class="d-flex align-items-center">
              <img src="${p.image}" class="product-img" alt="">
              <div>
                <h6 class="mb-0">${p.name}</h6>
                <small>${p.id}</small>
              </div>
            </div>
          </td>
          <td>${p.category}</td>
          <td>Rp ${p.price.toLocaleString("id-ID")}</td>
          <td>${p.sold}</td>
          <td>${formatDateLowStock2(p.date)}</td>
          <td>${p.rating}</td>
          <td>${p.discount}%</td>
          <td>${p.stock}</td>
          <td><span class="${stockInfo.class}">${stockInfo.text}</span></td>
        </tr>
      `;
    });
  }

  // ================================
  // DEFAULT STATE
  // ================================
  let selectedLowStockYear2 = "all";
  let selectedLowStockMonth2 = "all";

  // renderLowStockTable2(filterLowStockProducts2(selectedLowStockYear2, selectedLowStockMonth2));

  // ================================
  // YEAR FILTER EVENT
  // ================================
  document.querySelectorAll(".filter-year-low-stock-2").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      selectedLowStockYear2 = btn.dataset.year;

      document.getElementById("filterYearLowStock2Btn").innerHTML =
        `${selectedLowStockYear2 === "all" ? "All Years" : selectedLowStockYear2} <span class="ms-1">&#9662;</span>`;

      renderLowStockTable2(filterLowStockProducts2(selectedLowStockYear2, selectedLowStockMonth2));
    });
  });

  // ================================
  // MONTH FILTER EVENT
  // ================================
  document.querySelectorAll(".filter-month-low-stock-2").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      selectedLowStockMonth2 = btn.dataset.month;

      const monthText = btn.innerText.trim();
      document.getElementById("filterMonthLowStock2Label").textContent =
        selectedLowStockMonth2 === "all" ? "All Months" : monthText;

      renderLowStockTable2(filterLowStockProducts2(selectedLowStockYear2, selectedLowStockMonth2));
    });
  });

}

// ------GREETINGS------
if ($("#greetingUpdate").length) {

  function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good Afternoon";
    } else if (hour >= 17 && hour < 21) {
      greeting = "Good Evening";
    } else {
      greeting = "Good Night";
    }

    document.getElementById("greetingText").textContent = greeting;
  }

  updateGreeting();
}






    // ------TOTAL PROFIT 1------
     if ($("#marketingOverview1").length) {
      var marketingOverviewChart1 = document.getElementById("marketingOverview1").getContext('2d');
      var marketingOverviewData1 = {
          labels: ["JAN","FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [{
              label: '2024',
              data: [ 3125,
                2962,
                3129,
                3080,
                2976,
                3098,
                2977,
                3155,
                3088,
                2991,
                3038,
                2952 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257,
              2860, 
              3003, 
              3030, 
              2938, 
              2987, 
              2893, 
              3292, 
              2842, 
              3114, 
              2795, 
              3092 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1 = new Chart(marketingOverviewChart1, {
          type: 'bar',
          data: marketingOverviewData1,
          options: marketingOverviewOptions1
      });
      document.getElementById('marketing-overview-legend1').innerHTML = marketingOverview1.generateLegend();
    }

    // ------1_1------
    if ($("#marketingOverview1_1").length) {
      var marketingOverviewChart1_1 = document.getElementById("marketingOverview1_1").getContext('2d');
      var marketingOverviewData1_1 = {
          labels: ["JAN"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_1 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_1 = new Chart(marketingOverviewChart1_1, {
          type: 'bar',
          data: marketingOverviewData1_1,
          options: marketingOverviewOptions1_1
      });
      document.getElementById('marketing-overview-legend1_1').innerHTML = marketingOverview1_1.generateLegend();
    }

    // ------1_2------
    if ($("#marketingOverview1_2").length) {
      var marketingOverviewChart1_2 = document.getElementById("marketingOverview1_2").getContext('2d');
      var marketingOverviewData1_2 = {
          labels: ["FEB"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_2 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_2 = new Chart(marketingOverviewChart1_2, {
          type: 'bar',
          data: marketingOverviewData1_2,
          options: marketingOverviewOptions1_2
      });
      document.getElementById('marketing-overview-legend1_2').innerHTML = marketingOverview1_2.generateLegend();
    }

    // ------1_3------
    if ($("#marketingOverview1_3").length) {
      var marketingOverviewChart1_3 = document.getElementById("marketingOverview1_3").getContext('2d');
      var marketingOverviewData1_3 = {
          labels: ["MAR"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_3 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_3 = new Chart(marketingOverviewChart1_3, {
          type: 'bar',
          data: marketingOverviewData1_3,
          options: marketingOverviewOptions1_3
      });
      document.getElementById('marketing-overview-legend1_3').innerHTML = marketingOverview1_3.generateLegend();
    }

    // ------1_4------
    if ($("#marketingOverview1_4").length) {
      var marketingOverviewChart1_4 = document.getElementById("marketingOverview1_4").getContext('2d');
      var marketingOverviewData1_4 = {
          labels: ["APR"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_4 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_4 = new Chart(marketingOverviewChart1_4, {
          type: 'bar',
          data: marketingOverviewData1_4,
          options: marketingOverviewOptions1_4
      });
      document.getElementById('marketing-overview-legend1_4').innerHTML = marketingOverview1_4.generateLegend();
    }

    // ------1_5------
    if ($("#marketingOverview1_5").length) {
      var marketingOverviewChart1_5 = document.getElementById("marketingOverview1_5").getContext('2d');
      var marketingOverviewData1_5 = {
          labels: ["MEI"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_5 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_5 = new Chart(marketingOverviewChart1_5, {
          type: 'bar',
          data: marketingOverviewData1_5,
          options: marketingOverviewOptions1_5
      });
      document.getElementById('marketing-overview-legend1_5').innerHTML = marketingOverview1_5.generateLegend();
    }

    // ------1_6------
    if ($("#marketingOverview1_6").length) {
      var marketingOverviewChart1_6 = document.getElementById("marketingOverview1_6").getContext('2d');
      var marketingOverviewData1_6 = {
          labels: ["JUN"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_6 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_6 = new Chart(marketingOverviewChart1_6, {
          type: 'bar',
          data: marketingOverviewData1_6,
          options: marketingOverviewOptions1_6
      });
      document.getElementById('marketing-overview-legend1_6').innerHTML = marketingOverview1_6.generateLegend();
    }

    // ------1_7------
    if ($("#marketingOverview1_7").length) {
      var marketingOverviewChart1_7 = document.getElementById("marketingOverview1_7").getContext('2d');
      var marketingOverviewData1_7 = {
          labels: ["JUL"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_7 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_7 = new Chart(marketingOverviewChart1_7, {
          type: 'bar',
          data: marketingOverviewData1_7,
          options: marketingOverviewOptions1_7
      });
      document.getElementById('marketing-overview-legend1_7').innerHTML = marketingOverview1_7.generateLegend();
    }

    // ------1_8------
    if ($("#marketingOverview1_8").length) {
      var marketingOverviewChart1_8 = document.getElementById("marketingOverview1_8").getContext('2d');
      var marketingOverviewData1_8 = {
          labels: ["AUG"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_8 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_8 = new Chart(marketingOverviewChart1_8, {
          type: 'bar',
          data: marketingOverviewData1_8,
          options: marketingOverviewOptions1_8
      });
      document.getElementById('marketing-overview-legend1_8').innerHTML = marketingOverview1_8.generateLegend();
    }

    // ------1_9------
    if ($("#marketingOverview1_9").length) {
      var marketingOverviewChart1_9 = document.getElementById("marketingOverview1_9").getContext('2d');
      var marketingOverviewData1_9 = {
          labels: ["SEP"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_9 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_9 = new Chart(marketingOverviewChart1_9, {
          type: 'bar',
          data: marketingOverviewData1_9,
          options: marketingOverviewOptions1_9
      });
      document.getElementById('marketing-overview-legend1_9').innerHTML = marketingOverview1_9.generateLegend();
    }

    // ------1_10------
    if ($("#marketingOverview1_10").length) {
      var marketingOverviewChart1_10 = document.getElementById("marketingOverview1_10").getContext('2d');
      var marketingOverviewData1_10 = {
          labels: ["OCT"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_10 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_10 = new Chart(marketingOverviewChart1_10, {
          type: 'bar',
          data: marketingOverviewData1_10,
          options: marketingOverviewOptions1_10
      });
      document.getElementById('marketing-overview-legend1_10').innerHTML = marketingOverview1_10.generateLegend();
    }

    // ------1_11------
    if ($("#marketingOverview1_11").length) {
      var marketingOverviewChart1_11 = document.getElementById("marketingOverview1_11").getContext('2d');
      var marketingOverviewData1_11 = {
          labels: ["NOV"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_11 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_11 = new Chart(marketingOverviewChart1_11, {
          type: 'bar',
          data: marketingOverviewData1_11,
          options: marketingOverviewOptions1_11
      });
      document.getElementById('marketing-overview-legend1_11').innerHTML = marketingOverview1_11.generateLegend();
    }

    // ------1_12------
    if ($("#marketingOverview1_12").length) {
      var marketingOverviewChart1_12 = document.getElementById("marketingOverview1_12").getContext('2d');
      var marketingOverviewData1_12 = {
          labels: ["DEC"],
          datasets: [{
              label: '2024',
              data: [ 3125 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions1_12 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview1_12 = new Chart(marketingOverviewChart1_12, {
          type: 'bar',
          data: marketingOverviewData1_12,
          options: marketingOverviewOptions1_12
      });
      document.getElementById('marketing-overview-legend1_12').innerHTML = marketingOverview1_12.generateLegend();
    }

    // ------TOTAL MODAL 2------
     if ($("#marketingOverview2").length) {
      var marketingOverviewChart2 = document.getElementById("marketingOverview2").getContext('2d');
      var marketingOverviewData2 = {
          labels: ["JAN","FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [{
              label: '2024',
              // data: [ 3125,
              //   2962,
              //   3129,
              //   3080,
              //   2976,
              //   3098,
              //   2977,
              //   3155,
              //   3088,
              //   2991,
              //   3038,
              //   2952 ],

              data: [699333910, 
                712020860, 
                733753850, 
                759257090, 
                668713110, 
                719631450, 
                692085780, 
                701810460, 
                724234050, 
                686599750,
                709782900, 
                745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            // data: [ 3257,
            //   2860, 
            //   3003, 
            //   3030, 
            //   2938, 
            //   2987, 
            //   2893, 
            //   3292, 
            //   2842, 
            //   3114, 
            //   2795, 
            //   3092 ],

            data: [728789760, 
              691290860,
              719280000,
              708673070,
              686392920,
              703324550,
              668083710,
              755344160, 
              656261130, 
              803899940, 
              621547370, 
              751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2 = new Chart(marketingOverviewChart2, {
          type: 'bar',
          data: marketingOverviewData2,
          options: marketingOverviewOptions2
      });
      document.getElementById('marketing-overview-legend2').innerHTML = marketingOverview2.generateLegend();
    }

    // ------2_1------
    if ($("#marketingOverview2_1").length) {
      var marketingOverviewChart2_1 = document.getElementById("marketingOverview2_1").getContext('2d');
      var marketingOverviewData2_1 = {
          labels: ["JAN"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_1 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_1 = new Chart(marketingOverviewChart2_1, {
          type: 'bar',
          data: marketingOverviewData2_1,
          options: marketingOverviewOptions2_1
      });
      document.getElementById('marketing-overview-legend2_1').innerHTML = marketingOverview2_1.generateLegend();
    }

    // ------2_2------
    if ($("#marketingOverview2_2").length) {
      var marketingOverviewChart2_2 = document.getElementById("marketingOverview2_2").getContext('2d');
      var marketingOverviewData2_2 = {
          labels: ["FEB"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_2 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_2 = new Chart(marketingOverviewChart2_2, {
          type: 'bar',
          data: marketingOverviewData2_2,
          options: marketingOverviewOptions2_2
      });
      document.getElementById('marketing-overview-legend2_2').innerHTML = marketingOverview2_2.generateLegend();
    }

    // ------2_3------
    if ($("#marketingOverview2_3").length) {
      var marketingOverviewChart2_3 = document.getElementById("marketingOverview2_3").getContext('2d');
      var marketingOverviewData2_3 = {
          labels: ["MAR"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_3 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_3 = new Chart(marketingOverviewChart2_3, {
          type: 'bar',
          data: marketingOverviewData2_3,
          options: marketingOverviewOptions2_3
      });
      document.getElementById('marketing-overview-legend2_3').innerHTML = marketingOverview2_3.generateLegend();
    }

    // ------2_4------
    if ($("#marketingOverview2_4").length) {
      var marketingOverviewChart2_4 = document.getElementById("marketingOverview2_4").getContext('2d');
      var marketingOverviewData2_4 = {
          labels: ["APR"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_4 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_4 = new Chart(marketingOverviewChart2_4, {
          type: 'bar',
          data: marketingOverviewData2_4,
          options: marketingOverviewOptions2_4
      });
      document.getElementById('marketing-overview-legend2_4').innerHTML = marketingOverview2_4.generateLegend();
    }

    // ------2_5------
    if ($("#marketingOverview2_5").length) {
      var marketingOverviewChart2_5 = document.getElementById("marketingOverview2_5").getContext('2d');
      var marketingOverviewData2_5 = {
          labels: ["MEI"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_5 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_5 = new Chart(marketingOverviewChart2_5, {
          type: 'bar',
          data: marketingOverviewData2_5,
          options: marketingOverviewOptions2_5
      });
      document.getElementById('marketing-overview-legend2_5').innerHTML = marketingOverview2_5.generateLegend();
    }

    // ------2_6------
    if ($("#marketingOverview2_6").length) {
      var marketingOverviewChart2_6 = document.getElementById("marketingOverview2_6").getContext('2d');
      var marketingOverviewData2_6 = {
          labels: ["JUN"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_6 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_6 = new Chart(marketingOverviewChart2_6, {
          type: 'bar',
          data: marketingOverviewData2_6,
          options: marketingOverviewOptions2_6
      });
      document.getElementById('marketing-overview-legend2_6').innerHTML = marketingOverview2_6.generateLegend();
    }

    // ------2_7------
    if ($("#marketingOverview2_7").length) {
      var marketingOverviewChart2_7 = document.getElementById("marketingOverview2_7").getContext('2d');
      var marketingOverviewData2_7 = {
          labels: ["JUL"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_7 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_7 = new Chart(marketingOverviewChart2_7, {
          type: 'bar',
          data: marketingOverviewData2_7,
          options: marketingOverviewOptions2_7
      });
      document.getElementById('marketing-overview-legend2_7').innerHTML = marketingOverview2_7.generateLegend();
    }

    // ------2_8------
    if ($("#marketingOverview2_8").length) {
      var marketingOverviewChart2_8 = document.getElementById("marketingOverview2_8").getContext('2d');
      var marketingOverviewData2_8 = {
          labels: ["AUG"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_8 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_8 = new Chart(marketingOverviewChart2_8, {
          type: 'bar',
          data: marketingOverviewData2_8,
          options: marketingOverviewOptions2_8
      });
      document.getElementById('marketing-overview-legend2_8').innerHTML = marketingOverview2_8.generateLegend();
    }

    // ------2_9------
    if ($("#marketingOverview2_9").length) {
      var marketingOverviewChart2_9 = document.getElementById("marketingOverview2_9").getContext('2d');
      var marketingOverviewData2_9 = {
          labels: ["SEP"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_9 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_9 = new Chart(marketingOverviewChart2_9, {
          type: 'bar',
          data: marketingOverviewData2_9,
          options: marketingOverviewOptions2_9
      });
      document.getElementById('marketing-overview-legend2_9').innerHTML = marketingOverview2_9.generateLegend();
    }

    // ------2_10------
    if ($("#marketingOverview2_10").length) {
      var marketingOverviewChart2_10 = document.getElementById("marketingOverview2_10").getContext('2d');
      var marketingOverviewData2_10 = {
          labels: ["OCT"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_10 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_10 = new Chart(marketingOverviewChart2_10, {
          type: 'bar',
          data: marketingOverviewData2_10,
          options: marketingOverviewOptions2_10
      });
      document.getElementById('marketing-overview-legend2_10').innerHTML = marketingOverview2_10.generateLegend();
    }

    // ------2_11------
    if ($("#marketingOverview2_11").length) {
      var marketingOverviewChart2_11 = document.getElementById("marketingOverview2_11").getContext('2d');
      var marketingOverviewData2_11 = {
          labels: ["NOV"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_11 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_11 = new Chart(marketingOverviewChart2_11, {
          type: 'bar',
          data: marketingOverviewData2_11,
          options: marketingOverviewOptions2_11
      });
      document.getElementById('marketing-overview-legend2_11').innerHTML = marketingOverview2_11.generateLegend();
    }

    // ------2_12------
    if ($("#marketingOverview2_12").length) {
      var marketingOverviewChart2_12 = document.getElementById("marketingOverview2_12").getContext('2d');
      var marketingOverviewData2_12 = {
          labels: ["DEC"],
          datasets: [{
              label: '2024',
              data: [ 699333910 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 728789760 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions2_12 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview2_12 = new Chart(marketingOverviewChart2_12, {
          type: 'bar',
          data: marketingOverviewData2_12,
          options: marketingOverviewOptions2_12
      });
      document.getElementById('marketing-overview-legend2_12').innerHTML = marketingOverview2_12.generateLegend();
    }

    // ------TOTAL EARNING 3------
     if ($("#marketingOverview3").length) {
      var marketingOverviewChart3 = document.getElementById("marketingOverview3").getContext('2d');
      var marketingOverviewData3 = {
          labels: ["JAN","FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [{
              label: '2024',
              data: [ 3125,
                2962,
                3129,
                3080,
                2976,
                3098,
                2977,
                3155,
                3088,
                2991,
                3038,
                2952 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 3257,
              2860, 
              3003, 
              3030, 
              2938, 
              2987, 
              2893, 
              3292, 
              2842, 
              3114, 
              2795, 
              3092 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3 = new Chart(marketingOverviewChart3, {
          type: 'bar',
          data: marketingOverviewData3,
          options: marketingOverviewOptions3
      });
      document.getElementById('marketing-overview-legend3').innerHTML = marketingOverview3.generateLegend();
    }

    // ------3_1------
    if ($("#marketingOverview3_1").length) {
      var marketingOverviewChart3_1 = document.getElementById("marketingOverview3_1").getContext('2d');
      var marketingOverviewData3_1 = {
          labels: ["JAN"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_1 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_1 = new Chart(marketingOverviewChart3_1, {
          type: 'bar',
          data: marketingOverviewData3_1,
          options: marketingOverviewOptions3_1
      });
      document.getElementById('marketing-overview-legend3_1').innerHTML = marketingOverview3_1.generateLegend();
    }

    // ------3_2------
    if ($("#marketingOverview3_2").length) {
      var marketingOverviewChart3_2 = document.getElementById("marketingOverview3_2").getContext('2d');
      var marketingOverviewData3_2 = {
          labels: ["FEB"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_2 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_2 = new Chart(marketingOverviewChart3_2, {
          type: 'bar',
          data: marketingOverviewData3_2,
          options: marketingOverviewOptions3_2
      });
      document.getElementById('marketing-overview-legend3_2').innerHTML = marketingOverview3_2.generateLegend();
    }

    // ------3_3------
    if ($("#marketingOverview3_3").length) {
      var marketingOverviewChart3_3 = document.getElementById("marketingOverview3_3").getContext('2d');
      var marketingOverviewData3_3 = {
          labels: ["MAR"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_3 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_3 = new Chart(marketingOverviewChart3_3, {
          type: 'bar',
          data: marketingOverviewData3_3,
          options: marketingOverviewOptions3_3
      });
      document.getElementById('marketing-overview-legend3_3').innerHTML = marketingOverview3_3.generateLegend();
    }

    // ------3_4------
    if ($("#marketingOverview3_4").length) {
      var marketingOverviewChart3_4 = document.getElementById("marketingOverview3_4").getContext('2d');
      var marketingOverviewData3_4 = {
          labels: ["APR"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_4 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_4 = new Chart(marketingOverviewChart3_4, {
          type: 'bar',
          data: marketingOverviewData3_4,
          options: marketingOverviewOptions3_4
      });
      document.getElementById('marketing-overview-legend3_4').innerHTML = marketingOverview3_4.generateLegend();
    }

    // ------3_5------
    if ($("#marketingOverview3_5").length) {
      var marketingOverviewChart3_5 = document.getElementById("marketingOverview3_5").getContext('2d');
      var marketingOverviewData3_5 = {
          labels: ["MEI"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_5 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_5 = new Chart(marketingOverviewChart3_5, {
          type: 'bar',
          data: marketingOverviewData3_5,
          options: marketingOverviewOptions3_5
      });
      document.getElementById('marketing-overview-legend3_5').innerHTML = marketingOverview3_5.generateLegend();
    }

    // ------3_6------
    if ($("#marketingOverview3_6").length) {
      var marketingOverviewChart3_6 = document.getElementById("marketingOverview3_6").getContext('2d');
      var marketingOverviewData3_6 = {
          labels: ["JUN"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_6 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_6 = new Chart(marketingOverviewChart3_6, {
          type: 'bar',
          data: marketingOverviewData3_6,
          options: marketingOverviewOptions3_6
      });
      document.getElementById('marketing-overview-legend3_6').innerHTML = marketingOverview3_6.generateLegend();
    }

    // ------3_7------
    if ($("#marketingOverview3_7").length) {
      var marketingOverviewChart3_7 = document.getElementById("marketingOverview3_7").getContext('2d');
      var marketingOverviewData3_7 = {
          labels: ["JUL"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_7 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_7 = new Chart(marketingOverviewChart3_7, {
          type: 'bar',
          data: marketingOverviewData3_7,
          options: marketingOverviewOptions3_7
      });
      document.getElementById('marketing-overview-legend3_7').innerHTML = marketingOverview3_7.generateLegend();
    }

    // ------3_8------
    if ($("#marketingOverview3_8").length) {
      var marketingOverviewChart3_8 = document.getElementById("marketingOverview3_8").getContext('2d');
      var marketingOverviewData3_8 = {
          labels: ["AUG"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_8 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_8 = new Chart(marketingOverviewChart3_8, {
          type: 'bar',
          data: marketingOverviewData3_8,
          options: marketingOverviewOptions3_8
      });
      document.getElementById('marketing-overview-legend3_8').innerHTML = marketingOverview3_8.generateLegend();
    }

    // ------3_9------
    if ($("#marketingOverview3_9").length) {
      var marketingOverviewChart3_9 = document.getElementById("marketingOverview3_9").getContext('2d');
      var marketingOverviewData3_9 = {
          labels: ["SEP"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_9 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_9 = new Chart(marketingOverviewChart3_9, {
          type: 'bar',
          data: marketingOverviewData3_9,
          options: marketingOverviewOptions3_9
      });
      document.getElementById('marketing-overview-legend3_9').innerHTML = marketingOverview3_9.generateLegend();
    }

    // ------3_10------
    if ($("#marketingOverview3_10").length) {
      var marketingOverviewChart3_10 = document.getElementById("marketingOverview3_10").getContext('2d');
      var marketingOverviewData3_10 = {
          labels: ["OCT"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_10 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_10 = new Chart(marketingOverviewChart3_10, {
          type: 'bar',
          data: marketingOverviewData3_10,
          options: marketingOverviewOptions3_10
      });
      document.getElementById('marketing-overview-legend3_10').innerHTML = marketingOverview3_10.generateLegend();
    }

    // ------3_11------
    if ($("#marketingOverview3_11").length) {
      var marketingOverviewChart3_11 = document.getElementById("marketingOverview3_11").getContext('2d');
      var marketingOverviewData3_11 = {
          labels: ["NOV"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_11 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_11 = new Chart(marketingOverviewChart3_11, {
          type: 'bar',
          data: marketingOverviewData3_11,
          options: marketingOverviewOptions3_11
      });
      document.getElementById('marketing-overview-legend3_11').innerHTML = marketingOverview3_11.generateLegend();
    }

    // ------3_12------
    if ($("#marketingOverview3_12").length) {
      var marketingOverviewChart3_12 = document.getElementById("marketingOverview3_12").getContext('2d');
      var marketingOverviewData3_12 = {
          labels: ["DEC"],
          datasets: [{
              label: '2024',
              data: [ 712020860 ],

              // data: [699333910, 
              //   712020860, 
              //   733753850, 
              //   759257090, 
              //   668713110, 
              //   719631450, 
              //   692085780, 
              //   701810460, 
              //   724234050, 
              //   686599750,
              //   709782900, 
              //   745893410 ],

              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          },{
            label: '2025',
            data: [ 691290860 ],

            // data: [728789760, 
            //   691290860,
            //   719280000,
            //   708673070,
            //   686392920,
            //   703324550,
            //   668083710,
            //   755344160, 
            //   656261130, 
            //   803899940, 
            //   621547370, 
            //   751786430, ],

            backgroundColor: "#1F3BB3",
            borderColor: [
                '#1F3BB3',
            ],
            borderWidth: 0,
            fill: true, // 3: no fill
        }]
      };
  
      var marketingOverviewOptions3_12 = {
        responsive: true,
        maintainAspectRatio: false,
        // aspectRatio: false,
        layout: {
          padding: {
            top: 0,
            bottom: 0 // ⬅️ kurangi padding bawah chart
          }
        },
        scales: {
          yAxes: [{
            gridLines: {
              display: true,
              drawBorder: false,
              color: "#F0F0F0",
              zeroLineColor: '#F0F0F0',
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              maxTicksLimit: 5,
              fontSize: 10,
              color: "#6B778C",
              // ⬇️ Format angka jadi 100.000
              callback: function(value) {
                return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }],
          xAxes: [{
            // ⬇️ ubah ke false biar bar ga tumpuk
            stacked: false,
            // ⬇️ atur lebar tiap bar
            barPercentage: 0.4,
            categoryPercentage: 0.5,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: false,
              autoSkip: true,
              maxTicksLimit: 12,
              fontSize: 10,
              color: "#6B778C"
            }
          }],
        },
        legend: false,
        legendCallback: function(chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            text.push('<li class="text-muted text-small">');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '"></span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
        elements: {
          line: {
            tension: 0.4,
          }
        },
        tooltips: {
          backgroundColor: 'rgba(31, 59, 179, 1)',
          callbacks: {
            // ⬇️ Tooltip juga diformat pakai titik ribuan
            label: function(tooltipItem, data) {
              let value = tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + value;
            }
          }
        }
      };

      var marketingOverview3_12 = new Chart(marketingOverviewChart3_12, {
          type: 'bar',
          data: marketingOverviewData3_12,
          options: marketingOverviewOptions3_12
      });
      document.getElementById('marketing-overview-legend3_12').innerHTML = marketingOverview3_12.generateLegend();
    }

    
    

    // if ($("#marketingOverview-dark").length) {
    //   var marketingOverviewChartDark = document.getElementById("marketingOverview-dark").getContext('2d');
    //   var marketingOverviewDataDark = {
    //       labels: ["JAN","FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
    //       datasets: [{
    //           label: 'Last week',
    //           data: [110, 220, 200, 190, 220, 110, 210, 110, 205, 202, 201, 150],
    //           backgroundColor: "#52CDFF",
    //           borderColor: [
    //               '#52CDFF',
    //           ],
    //           borderWidth: 0,
    //           fill: true, // 3: no fill
              
    //       },{
    //         label: 'This week',
    //         data: [215, 290, 210, 250, 290, 230, 290, 210, 280, 220, 190, 300],
    //         backgroundColor: "#1F3BB3",
    //         borderColor: [
    //             '#1F3BB3',
    //         ],
    //         borderWidth: 0,
    //         fill: true, // 3: no fill
    //     }]
    //   };
  
    //   var marketingOverviewOptionsDark = {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //       scales: {
    //           yAxes: [{
    //               gridLines: {
    //                   display: true,
    //                   drawBorder: false,
    //                   color:"rgba(255,255,255,.05)",
    //                   zeroLineColor: "rgba(255,255,255,.05)",
    //               },
    //               ticks: {
    //                 beginAtZero: true,
    //                 autoSkip: true,
    //                 maxTicksLimit: 5,
    //                 fontSize: 10,
    //                 color:"#6B778C"
    //               }
    //           }],
    //           xAxes: [{
    //             stacked: true,
    //             barPercentage: 0.35,
    //             gridLines: {
    //                 display: false,
    //                 drawBorder: false,
    //             },
    //             ticks: {
    //               beginAtZero: false,
    //               autoSkip: true,
    //               maxTicksLimit: 7,
    //               fontSize: 10,
    //               color:"#6B778C"
    //             }
    //         }],
    //       },
    //       legend:false,
    //       legendCallback: function (chart) {
    //         var text = [];
    //         text.push('<div class="chartjs-legend"><ul>');
    //         for (var i = 0; i < chart.data.datasets.length; i++) {
    //           console.log(chart.data.datasets[i]); // see what's inside the obj.
    //           text.push('<li class="text-muted text-small">');
    //           text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
    //           text.push(chart.data.datasets[i].label);
    //           text.push('</li>');
    //         }
    //         text.push('</ul></div>');
    //         return text.join("");
    //       },
          
    //       elements: {
    //           line: {
    //               tension: 0.4,
    //           }
    //       },
    //       tooltips: {
    //           backgroundColor: 'rgba(31, 59, 179, 1)',
    //       }
    //   }
    //   var marketingOverviewDark = new Chart(marketingOverviewChartDark, {
    //       type: 'bar',
    //       data: marketingOverviewDataDark,
    //       options: marketingOverviewOptionsDark
    //   });
    //   document.getElementById('marketing-overview-legend').innerHTML = marketingOverviewDark.generateLegend();
    // }
    
    if ($("#doughnutChart").length) {
      var doughnutChartCanvas = $("#doughnutChart").get(0).getContext("2d");

      var doughnutPieData = {
        datasets: [{
          data: [258, 257, 258, 257],
          backgroundColor: [
            "#1F3BB3",
            "#52CDFF",
            "#f1d4ebff",
            "#f49fd2ff"
          ],
          borderColor: [
            "#1F3BB3",
            "#52CDFF",
            "#f1d4ebff",
            "#f49fd2ff"
          ],
        }],
  
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Atasan Pria',
          'Bawahan Pria',
          'Atasan Wanita',
          'Bawahan Wanita',
        ]
      };
      var doughnutPieOptions = {
        cutoutPercentage: 50,
        animationEasing: "easeOutBounce",
        animateRotate: true,
        animateScale: false,
        responsive: true,
        maintainAspectRatio: true,
        showScale: true,
        legend: false,
        // legendCallback: function (chart) {
        //   var text = [];
        //   text.push('<div class="chartjs-legend"><ul class="justify-content-center">');
        //   for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
        //     text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
        //     text.push('</span>');
        //     if (chart.data.labels[i]) {
        //       text.push(chart.data.labels[i]);
        //     }
        //     text.push('</li>');
        //   }
        //   text.push('</div></ul>');
        //   return text.join("");
        // },
        legendCallback: function (chart) {
          var text = [];
          // text.push('<div style="display:flex; flex-wrap:wrap; justify-content:center; column-gap:30px; row-gap:6px; margin-top:0;">');

          text.push('<div style="display:flex; flex-wrap:wrap; justify-content:center; column-gap:40px; row-gap:14px; margin-top:5px;">');
          for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
            text.push('<div style="display:flex; align-items:center; font-size:12px; color:#6c757d;">');
            text.push('<span style="display:inline-block; width:14px; height:14px; border-radius:50%; margin-right:8px; background-color:' + chart.data.datasets[0].backgroundColor[i] + ';"></span>');
            text.push(chart.data.labels[i]);
            text.push('</div>');
          }
          text.push('</div>');
          return text.join("");
        },

        
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
            bottom: 0
          }
        },
        tooltips: {
          callbacks: {
            title: function(tooltipItem, data) {
              return data['labels'][tooltipItem[0]['index']];
            },
            label: function(tooltipItem, data) {
              return data['datasets'][0]['data'][tooltipItem['index']];
            }
          },
            
          backgroundColor: '#fff',
          titleFontSize: 14,
          titleFontColor: '#0B0F32',
          bodyFontColor: '#737F8B',
          bodyFontSize: 11,
          displayColors: false
        }
      };
      var doughnutChart = new Chart(doughnutChartCanvas, {
        type: 'doughnut',
        data: doughnutPieData,
        options: doughnutPieOptions
      });
      document.getElementById('doughnut-chart-legend').innerHTML = doughnutChart.generateLegend();

    }

    if ($("#leaveReport").length) {
      var leaveReportChart = document.getElementById("leaveReport").getContext('2d');
      var leaveReportData = {
          labels: ["1 - 1,99","2 - 2,99", "3 - 3,99", "4 - 4,99", "5"],
          datasets: [{
              label: 'Total',
              data: [228,
                286,
                231,
                284,
                1],
              backgroundColor: "#52CDFF",
              borderColor: [
                  '#52CDFF',
              ],
              borderWidth: 0,
              fill: true, // 3: no fill
              
          }]
      };
  
      var leaveReportOptions = {
        responsive: true,
        maintainAspectRatio: false,
          scales: {
              yAxes: [{
                  gridLines: {
                      display: true,
                      drawBorder: false,
                      color:"rgba(255,255,255,.05)",
                      zeroLineColor: "rgba(255,255,255,.05)",
                  },
                  ticks: {
                    beginAtZero: true,
                    autoSkip: true,
                    maxTicksLimit: 5,
                    fontSize: 10,
                    color:"#6B778C"
                  }
              }],
              xAxes: [{
                barPercentage: 0.5,
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                  beginAtZero: false,
                  autoSkip: true,
                  maxTicksLimit: 7,
                  fontSize: 10,
                  color:"#6B778C"
                }
            }],
            
          },
          legend:false,
          
          elements: {
              line: {
                  tension: 0.4,
              }
          },
          tooltips: {
              backgroundColor: 'rgba(31, 59, 179, 1)',
          }
      }
      
      var leaveReport = new Chart(leaveReportChart, {
          type: 'bar',
          data: leaveReportData,
          options: leaveReportOptions
      });
      
    }

    

    // if ($("#leaveReport-dark").length) {
    //   var leaveReportChartDark = document.getElementById("leaveReport-dark").getContext('2d');
    //   var leaveReportDataDark = {
    //       labels: ["JAN","FEB", "MAR", "APR", "MAY"],
    //       datasets: [{
    //           label: 'Last week',
    //           data: [18, 25, 39, 11, 24],
    //           backgroundColor: "#52CDFF",
    //           borderColor: [
    //               '#52CDFF',
    //           ],
    //           borderWidth: 0,
    //           fill: true, // 3: no fill
              
    //       }]
    //   };
  
    //   var leaveReportOptionsDark = {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //       scales: {
    //           yAxes: [{
    //               gridLines: {
    //                   display: true,
    //                   drawBorder: false,
    //                   color:"#383e5d",
    //                   zeroLineColor: '#383e5d',
    //               },
    //               ticks: {
    //                 beginAtZero: true,
    //                 autoSkip: true,
    //                 maxTicksLimit: 5,
    //                 fontSize: 10,
    //                 color:"#6B778C"
    //               }
    //           }],
    //           xAxes: [{
    //             barPercentage: 0.5,
    //             gridLines: {
    //                 display: false,
    //                 drawBorder: false,
    //             },
    //             ticks: {
    //               beginAtZero: false,
    //               autoSkip: true,
    //               maxTicksLimit: 7,
    //               fontSize: 10,
    //               color:"#6B778C"
    //             }
    //         }],
    //       },
    //       legend:false,
          
    //       elements: {
    //           line: {
    //               tension: 0.4,
    //           }
    //       },
    //       tooltips: {
    //           backgroundColor: 'rgba(31, 59, 179, 1)',
    //       }
    //   }
    //   var leaveReportDark = new Chart(leaveReportChartDark, {
    //       type: 'bar',
    //       data: leaveReportDataDark,
    //       options: leaveReportOptionsDark
    //   });
    // }

    
  
  });
})(jQuery);