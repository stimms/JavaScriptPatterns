d3.scale.groupedColorScale = function () {
    var domain, range;

    function scale(x) {
        var rangeIndex = 0;
        domain.forEach(function (item, index) {
            console.log(x);
            console.log(index);
            console.dir(item);
            if (item.indexOf(x) != -1)
                rangeIndex = index;
        });
        return range[rangeIndex];
    }

    scale.domain = function (x) {
        if (!arguments.length)
            return domain;
        domain = x;
        return scale;
    };

    scale.range = function (x) {
        if (!arguments.length)
            return range;
        range = x;
        return scale;
    };

    return scale;
};

var s = d3.scale.groupedColorScale().domain([[1, 2, 3], [4, 5]]).range(["#111111", "#222222"]);
s(3);
s(4);