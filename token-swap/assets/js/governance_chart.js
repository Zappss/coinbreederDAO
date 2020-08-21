const pieChartData = (labels, datas, backgrounds, labelName = "Chart") => {
    return {
        labels: labels,
        datasets: [{
            label: labelName,
            backgroundColor: backgrounds,
            borderColor: '#fff',
            borderWidth: 0,
            pointBorderWidth: 1,
            pointBackgroundColor: 'rgba(114, 94, 195, 1)',
            data: datas
        }]
    }
}


const pieChartOption = {
    tooltips: {
        backgroundColor: '#393f49',
        titleMarginBottom: 8,
        titleFontSize: 14,
        titleFontColor: '#f8f9fa',
        titleFontFamily: "'Open Sans', sans-serif",
        bodyFontSize: 11,
        bodyFontColor: '#d7d9e0',
        bodyFontFamily: "'Open Sans', sans-serif",
        footerMarginTop: 10,
        footerFontSize: 11,
        footerFontColor: '#f8f9fa',
        footerFontFamily: "'Open Sans', sans-serif",
        xPadding: 10,
        yPadding: 10,
        caretSize: 0,
        cornerRadius: 4,
    },
    legend: {
        labels: {
            padding: 30,
            fontSize: 14,
            fontColor: '#6c757d',
            fontFamily: "'Open Sans', sans-serif",
            boxWidth: 14,
        },
    },
    scales: {
        display: false,
    },
    maintainAspectRatio: false
}

const chartElement = (el) => {
    return document.querySelector(el).getContext('2d');
}




// Active Vote Count
var voteCount = new Chart(chartElement("#voteCountChart"), {
    type: 'pie',
    data: pieChartData( 
        ["(100 BREE) -Yes", "(100 BREE) -No"], 
        [50, 50], 
        ["rgba(114, 94, 195, 1)", "rgba(239, 81, 100, 1)"],
        "Vote Count"
    ),
    options: pieChartOption
})

// Active Trust Score
var voteCount = new Chart(chartElement("#trustScoreChart"), {
    type: 'pie',
    data: pieChartData( 
        ["(10.4 CBTS) - Yes", "(10.4 CBTS) - No"], 
        [50, 50], 
        [
            'rgba(142, 159, 255, 1)',
            'rgba(171, 184, 255, 1)'
        ],
        "Vote Count"
    ),
    options: pieChartOption
})

// Active sVote Allocation
var voteCount = new Chart(chartElement("#voteAllocationChart"), {
    type: 'pie',
    data: pieChartData( 
        ["(10 BREE) - proposal creator", "(20 BREE) - winnning voters", "(170 BREE)- to be burned"], 
        [5, 10, 85], 
        [
            'rgba(142, 159, 255, 1)',
            'rgba(171, 184, 255, 1)',
            'rgba(202, 210, 255, 1)',
        ],
        "Vote Count"
    ),
    options: pieChartOption
})


// In-Active Vote Count
var voteCount = new Chart(chartElement("#Inactive_a_voteCountChart"), {
    type: 'pie',
    data: pieChartData( 
        ["(200 BREE) -Yes", "(100 BREE) -No"], 
        [50, 50], 
        ["rgba(114, 94, 195, 1)", "rgba(239, 81, 100, 1)"],
        "Vote Count"
    ),
    options: pieChartOption
})

// In-Active Trust Score
var voteCount = new Chart(chartElement("#Inactive_a_trustScoreChart"), {
    type: 'pie',
    data: pieChartData( 
        ["(20 CBTS) - Yes", "(10 CBTS) - No"], 
        [50, 50], 
        [
            'rgba(142, 159, 255, 1)',
            'rgba(171, 184, 255, 1)'
        ],
        "Vote Count"
    ),
    options: pieChartOption
})

// In-Active sVote Allocation
var voteCount = new Chart(chartElement("#Inactive_a_voteAllocationChart"), {
    type: 'pie',
    data: pieChartData( 
        ["(15 BREE) - proposal creator", "(30 BREE) - winnning voters", "(255 BREE)- to be burned"], 
        [5, 10, 85], 
        [
            'rgba(142, 159, 255, 1)',
            'rgba(171, 184, 255, 1)',
            'rgba(202, 210, 255, 1)',
        ],
        "Vote Count"
    ),
    options: pieChartOption
})


// In-Active Rejected Vote Count
var voteCount = new Chart(chartElement("#Inactive_r_voteCountChart"), {
    type: 'pie',
    data: pieChartData( 
        ["(100 BREE) -Yes", "(200 BREE) -No"], 
        [50, 50], 
        ["rgba(114, 94, 195, 1)", "rgba(239, 81, 100, 1)"],
        "Vote Count"
    ),
    options: pieChartOption
})

// In-Active Rejected Trust Score
var voteCount = new Chart(chartElement("#Inactive_r_trustScoreChart"), {
    type: 'pie',
    data: pieChartData( 
        ["(10 CBTS) - Yes", "(20 CBTS) - No"], 
        [50, 50], 
        [
            'rgba(142, 159, 255, 1)',
            'rgba(171, 184, 255, 1)'
        ],
        "Vote Count"
    ),
    options: pieChartOption
})

// In-Active Rejected sVote Allocation
var voteCount = new Chart(chartElement("#Inactive_r_voteAllocationChart"), {
    type: 'pie',
    data: pieChartData( 
        ["(0 BREE) - proposal creator", "(30 BREE) - winnning voters", "(270 BREE)- to be burned"], 
        [0, 10, 90], 
        [
            'rgba(142, 159, 255, 1)',
            'rgba(171, 184, 255, 1)',
            'rgba(202, 210, 255, 1)',
        ],
        "Vote Count"
    ),
    options: pieChartOption
})








// Bar Chart
const barChartData = (labels, datas, backgrounds, labelName = "Chart") => {
    return {
        labels: labels,
        datasets: [
            {
                label: labelName,
                backgroundColor: backgrounds,
                borderColor: 'rgba(94, 119, 255, 0)',
                borderWidth: 0,
                pointRadius: 3,
                pointHoverRadius: 3,
                pointHitRadius: 100,
                pointBackgroundColor: 'transparent',
                pointHoverBackgroundColor: 'rgba(94, 119, 255, 1)',
                data: datas
            }
        ]
    }
}

const barChartOption = {
    tooltips: {
        mode: 'nearest',
        intersect: true,
        backgroundColor: '#393f49',
        titleMarginBottom: 8,
        titleFontSize: 14,
        titleFontColor: '#f8f9fa',
        titleFontFamily: "'Open Sans', sans-serif",
        bodyFontSize: 11,
        bodyFontColor: '#d7d9e0',
        bodyFontFamily: "'Open Sans', sans-serif",
        footerMarginTop: 10,
        footerFontSize: 11,
        footerFontColor: '#f8f9fa',
        footerFontFamily: "'Open Sans', sans-serif",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 5,
        cornerRadius: 4,
    },
    legend: {
        labels: {
            padding: 30,
            fontSize: 14,
            fontColor: '#6c757d',
            fontFamily: "'Open Sans', sans-serif",
            boxWidth: 14,
        },
    },
    scales: {
        xAxes: [{
            gridLines: {
                lineWidth: 0,
                color: 'transparent',
                zeroLineWidth: 0,
                zeroLineColor: 'transparent',
            },
            ticks: {
                fontSize: 12,
                fontColor: '#bcbec0',
                fontFamily: "'Open Sans', sans-serif",
            },
        }],
        yAxes: [{
            gridLines: {
                lineWidth: 0,
                color: 'transparent',
                zeroLineWidth: 0,
                zeroLineColor: 'transparent',
            },
            ticks: {
                fontSize: 12,
                fontColor: '#bcbec0',
                fontFamily: "'Open Sans', sans-serif",
                beginAtZero: true
            },
        }],
    },
    maintainAspectRatio: false
}


// In-Active Rejected sVote Allocation
// var voteCount = new Chart(chartElement("#voteBarChart"), {
//     type: 'bar',
//     data: barChartData( 
//         ["Yes", "No"], 
//         [50, 50], 
//         "rgba(94, 119, 255, 0.8)",
//         "Vote Count"
//     ),
//     options: barChartOption
// })

var myChart = new Chart(chartElement("#voteBarChart"), {
    type: 'bar',
    data: {
        labels: ['Yes', 'No', '', '', '', ''],
        datasets: [{
            label: 'Votes',
            data: [50, 50],
            backgroundColor: [
                "rgba(114, 94, 195, 1)", "rgba(239, 81, 100, 1)"
            ],
            borderColor: [
                "rgba(114, 94, 195, 1)", "rgba(239, 81, 100, 1)"
            ],
            borderWidth: 1
        }]
    },
    options: barChartOption
});

var myChart = new Chart(chartElement("#voteBarChart1"), {
    type: 'bar',
    data: {
        labels: ['Yes', 'No', '', '', '', ''],
        datasets: [{
            label: 'Votes',
            data: [50, 50],
            backgroundColor: [
                "rgba(114, 94, 195, 1)", "rgba(239, 81, 100, 1)"
            ],
            borderColor: [
                "rgba(114, 94, 195, 1)", "rgba(239, 81, 100, 1)"
            ],
            borderWidth: 1
        }]
    },
    options: barChartOption
});