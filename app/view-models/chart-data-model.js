// Charting
var dependencyObservableModule = require("ui/core/dependency-observable");

var CategoricalDataModel = (function (_super) {
    __extends(CategoricalDataModel, _super);
    
    function CategoricalDataModel() {
        _super.call(this);
    }
    Object.defineProperty(CategoricalDataModel.prototype, "categoricalSource", {
        get: function () {
            return [
                { Distance: 0, Elevation: 0 },
                { Distance: 1, Elevation: 0 },
                { Distance: 2, Elevation: 0 },
                { Distance: 3, Elevation: 0 },
                { Distance: 4, Elevation: 0 }
            ];
        },
        enumerable: true,
        configurable: true
    });
    
    return CategoricalDataModel;
})(dependencyObservableModule.DependencyObservable);
exports.CategoricalDataModel = CategoricalDataModel;

