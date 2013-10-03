define(["app/Filler"], function(Filler) {
    return function FillerSelector(pDropDownInput, pFiller) {
        var filler = pFiller;
        var select = pDropDownInput;

        for (var i = 0; i < select.length; i++) {
            select.remove(0);
        }

        var patterns = filler.getPatterns();
        for (var i = 0; i < patterns.length; i++) {
            var elem = document.createElement("option");
            elem.id = "patternopt" + i;
            elem.value = i;
            elem.text = patterns[i].name;
            select.add(elem);
        }
        select.onchange = function() {
            patterns[select.value].pattern();
        };

    };
});
