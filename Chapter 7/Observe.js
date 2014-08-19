var model = {};
Object.observe(model, function (changes) {
    changes.forEach(function (change) {
        console.log("A " + change.type + " occured on " + change.name + "" + change.oldValue);
    });
});
model.item = 7;
model.item = 8;
delete model.item;
