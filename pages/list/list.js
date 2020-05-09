Page({
    data: {
        x: 10,
        y: 10
    },
    tap: function (e) {
        this.setData({
            x: 30,
            y: 30
        })
    },
    onChange: function (e) {
        this.setData({
                x: e.detail.x,
                y: e.detail.y
            }
        )
        console.log("ASD" + e.detail.x)
    },
    onScale: function (e) {
        console.log(e.detail)
    }
})