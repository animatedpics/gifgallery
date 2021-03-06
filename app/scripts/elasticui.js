/*! elasticui - v0.0.6 - 2015-03-21
 * http://www.elasticui.com
 * Copyright (c) 2015 Yousef El-Dardiry; Licensed Apache */

var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function b() {
                this.ejsObjects = [], this.jsonObjects = []
            }
            return b.prototype.indexOf = function(b) {
                return this.jsonObjects.indexOf(a.EjsTool.getJsonFromEjsObject(b))
            }, b.prototype.add = function(b) {
                var c = this.indexOf(b); - 1 == c && (this.ejsObjects.push(b), this.jsonObjects.push(a.EjsTool.getJsonFromEjsObject(b)))
            }, b.prototype.remove = function(a) {
                var b = this.indexOf(a);
                b > -1 && (this.ejsObjects.splice(b, 1), this.jsonObjects.splice(b, 1))
            }, b
        }();
        a.EjsCollection = b
    }(b = a.util || (a.util = {}))
}(elasticui || (elasticui = {}));
var __extends = this.__extends || function(a, b) {
        function c() {
            this.constructor = a
        }
        for (var d in b) b.hasOwnProperty(d) && (a[d] = b[d]);
        c.prototype = b.prototype, a.prototype = new c
    }, elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function(b) {
            function c() {
                b.apply(this, arguments)
            }
            return __extends(c, b), c.prototype.getAsFilter = function() {
                return a.FilterTool.combineFilters(this.ejsObjects)
            }, c.prototype.getAsORFilter = function() {
                return a.FilterTool.combineFiltersShould(this.ejsObjects)
            }, c.prototype.contains = function(a) {
                return this.indexOf(a) > -1
            }, c
        }(a.EjsCollection);
        a.FilterCollection = b
    }(b = a.util || (a.util = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {}
            return a.combineFilters = function(a) {
                return 1 === a.length ? a[0] : a.length > 1 ? ejs.BoolFilter().must(a) : null
            }, a.combineFiltersShould = function(a) {
                return 1 === a.length ? a[0] : a.length > 1 ? ejs.BoolFilter().should(a) : null
            }, a
        }();
        a.FilterTool = b
    }(b = a.util || (a.util = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        a.services = angular.module("elasticui.services", [])
    }(b = a.services || (a.services = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        a.directives = angular.module("elasticui.directives", [])
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b() {
                var b = {};
                return b.restrict = "EAC", b.scope = !0, b.controller = a.controllers.AggregationController, b.link = function(a, b, c, d) {
                    a.$watch(b.attr("eui-aggregation") + " | euiCached", function(b) {
                        return a.aggregation.agg = b
                    });
                    var e = !0,
                        f = b.attr("eui-filter-self");
                    f && (a.$watch(f, function(b) {
                        return a.aggregation.filterSelf = b
                    }), e = a.$eval(f)), a.aggregation = {
                        agg: a.$eval(b.attr("eui-aggregation") + " | euiCached"),
                        filterSelf: e
                    }, d.init()
                }, b
            }
            return b
        }();
        b.AggregationDirective = c, b.directives.directive("euiAggregation", a.directives.AggregationDirective)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b() {
                var b = {};
                return b.restrict = "A", b.scope = !0, b.controller = a.controllers.FilterController, b.link = function(a, b, c, d) {
                    a.$watch(b.attr("eui-filter") + " | euiCached", function(b) {
                        return a.filter.filter = b
                    });
                    var e = !1,
                        f = b.attr("eui-enabled");
                    f && (a.$watch(f, function(b) {
                        return a.filter.enabled = b
                    }), e = a.$eval(f)), a.filter = {
                        filter: a.$eval(b.attr("eui-filter") + " | euiCached"),
                        enabled: e
                    }, d.init()
                }, b
            }
            return b
        }();
        b.FilterDirective = c, b.directives.directive("euiFilter", c)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b() {
                var b = {};
                return b.restrict = "EAC", b.scope = !1, b.controller = a.controllers.IndexController, b.link = function(a, b, c, d) {
                    a.$watch(c.euiIndex, function(a) {
                        d.indexVM.index = a
                    }), d.indexVM.index = a.$eval(c.euiIndex)
                }, b
            }
            return b
        }();
        b.IndexDirective = c, b.directives.directive("euiIndex", c)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                var a = {};
                return a.require = "ngModel", a.link = function(a, b, c, d) {
                    d.$parsers.push(function(a) {
                        return !a
                    }), d.$formatters.push(function(a) {
                        return !a
                    })
                }, a
            }
            return a
        }();
        a.InvertedDirective = b, a.directives.directive("euiInverted", b)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b() {
                var b = {};
                return b.restrict = "EAC", b.scope = !0, b.controller = a.controllers.OrFilterController, b.link = function() {}, b
            }
            return b
        }();
        b.OrFilterDirective = c, b.directives.directive("euiOrFilter", c)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b() {
                var b = {};
                return b.restrict = "A", b.scope = !0, b.controller = a.controllers.SortController, b.link = function(a, b, c, d) {
                    a.$watch(b.attr("eui-sort") + " | euiCached", function(b) {
                        return a.sorting.sort = b
                    });
                    var e = !1,
                        f = b.attr("eui-enabled");
                    f && (a.$watch(f, function(b) {
                        return a.sorting.enabled = b
                    }), e = a.$eval(f)), a.sorting = {
                        sort: a.$eval(b.attr("eui-sort") + " | euiCached"),
                        enabled: e
                    }, d.init()
                }, b
            }
            return b
        }();
        b.SortDirective = c, b.directives.directive("euiSort", c)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                var a = {};
                return a.restrict = "EAC", a.scope = !1, a.transclude = !1, a.link = {
                    pre: function(a, b) {
                        var c = b.attr("eui-key");
                        a.$watch(b.attr("eui-value"), function(b, d) {
                            angular.equals(b, d) || (a[c] = b)
                        }, !0), a[c] = a.$eval(b.attr("eui-value"))
                    }
                }, a
            }
            return a.$inject = ["$timeout"], a
        }();
        a.VarDirective = b, a.directives.directive("euiVar", b)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        a.filters = angular.module("elasticui.filters", [])
    }(b = a.filters || (a.filters = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                var a = {};
                return function(b) {
                    if (!b) return b;
                    var c = angular.toJson(b.toJSON());
                    return a[c] || (a[c] = b), a[c]
                }
            }
            return a
        }();
        a.CachedFilter = b, a.filters.filter("euiCached", b)
    }(b = a.filters || (a.filters = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                return function(b, c) {
                    if (!b || !b.length) return b;
                    var d = a.parseString(c);
                    return b.map(function(b) {
                        return [b.key, a.getValue(b, d)]
                    })
                }
            }
            return a.parseString = function(a) {
                return a.split(".")
            }, a.getValue = function(a, b) {
                var c = a;
                return angular.forEach(b, function(a) {
                    return c ? void(c = c[a]) : c
                }), c
            }, a
        }();
        a.MapFilter = b, a.filters.filter("euiMap", b)
    }(b = a.filters || (a.filters = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                return function(a, b, c, d) {
                    void 0 === d && (d = 5);
                    for (var e = 1; b >= e; e++) c + d >= e && e >= c - d || c > e && 4 > c - d || e > c + d && 4 > b - (c + d) ? a.push(e) : 1 == e ? a.push(1, -1) : e == b && a.push(-2, b);
                    return a
                }
            }
            return a
        }();
        a.PageRangeFilter = b, a.filters.filter("euiPageRange", b)
    }(b = a.filters || (a.filters = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                return function(a, b) {
                    b = parseInt(b);
                    for (var c = 0; b > c; c++) a.push(c);
                    return a
                }
            }
            return a
        }();
        a.RangeFilter = b, a.filters.filter("euiRange", b)
    }(b = a.filters || (a.filters = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                return function(a) {
                    return a ? Math.round(a) : a
                }
            }
            return a
        }();
        a.RoundFilter = b, a.filters.filter("euiRound", b)
    }(b = a.filters || (a.filters = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                return function(a) {
                    return new Date(a).getTime()
                }
            }
            return a
        }();
        a.TimestampFilter = b, a.filters.filter("euiTimestamp", b)
    }(b = a.filters || (a.filters = {}))
}(elasticui || (elasticui = {})), angular.module("elasticui.controllers", []).controller(elasticui.controllers);
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b(a) {
                this.scope = a
            }
            return b.prototype.init = function() {
                var b = this;
                this.scope.$parent.$watch("indexVM.results", function() {
                    return b.updateResults()
                }), this.scope.$watch("aggregation.agg", function(c, d) {
                    a.util.EjsTool.equals(d, c) || (b.previousProvider && b.scope.indexVM.aggregationProviders.remove(b.previousProvider), b.updateAgg())
                }), this.scope.$watch("aggregation.filterSelf", function(a, c) {
                    a !== c && (b.previousProvider && b.scope.indexVM.aggregationProviders.remove(b.previousProvider), b.updateAgg())
                }), this.scope.$on("$destroy", function() {
                    b.previousProvider && b.scope.indexVM.aggregationProviders.remove(b.previousProvider)
                }), this.updateAgg()
            }, b.prototype.updateResults = function() {
                var a = this.scope.indexVM.results;
                if (this.scope.aggregation.agg && a && a.aggregations) {
                    var c = b.getAggName(this.scope.aggregation.agg),
                        d = Object.keys(a.aggregations).filter(function(a) {
                            return a == c || a == "filtered_" + c
                        })[0],
                        e = a.aggregations[d];
                    d == "filtered_" + c && (e = e[c]), this.scope.aggResult = e
                }
            }, b.prototype.updateAgg = function() {
                var a = this,
                    b = null;
                this.scope.aggregation.agg && (b = function(b) {
                    return a.getAggregation(b)
                }), b && this.scope.indexVM.aggregationProviders.add(b), this.previousProvider = b
            }, b.getAggName = function(a) {
                return Object.keys(a.toJSON())[0]
            }, b.prototype.getAggregationExplicit = function(c, d, e) {
                var f = this;
                if (!c) return null;
                var g = e;
                d || (g = g.filter(function(a) {
                    return a != f.scope.combinedFilter && ("undefined" == typeof a.field || a.field() != c.field())
                }));
                var h = a.util.FilterTool.combineFilters(g);
                return null != h && (c = new ejs.FilterAggregation("filtered_" + b.getAggName(c)).filter(h).agg(c)), c
            }, b.prototype.getAggregation = function(a) {
                return this.getAggregationExplicit(this.scope.aggregation.agg, this.scope.aggregation.filterSelf, a)
            }, b.$inject = ["$scope"], b
        }();
        b.AggregationController = c
    }(b = a.controllers || (a.controllers = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b(a) {
                this.scope = a
            }
            return b.prototype.init = function() {
                var b = this;
                if (this.scope.filter.filter) {
                    var c = this.scope.filters.contains(this.scope.filter.filter);
                    !c && this.scope.filter.enabled && (this.scope.filters.add(this.scope.filter.filter), c = !0)
                }
                this.scope.filter.enabled = c, this.scope.$watch("filter.enabled", function(a, c) {
                    a !== c && b.updateFilter()
                }), this.scope.$watch("filter.filter", function(c, d) {
                    a.util.EjsTool.equals(d, c) || (d && b.scope.filters.remove(d), b.updateFilter())
                })
            }, b.prototype.updateFilter = function() {
                this.scope.filter.filter && (this.scope.filter.enabled ? this.scope.filters.add(this.scope.filter.filter) : this.scope.filters.remove(this.scope.filter.filter))
            }, b.$inject = ["$scope"], b
        }();
        b.FilterController = c
    }(b = a.controllers || (a.controllers = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b(b, c, d, e, f) {
                var g = this;
                this.filters = new a.util.FilterCollection, this.indexVM = {
                    host: null,
                    query: null,
                    sort: null,
                    aggregationProviders: new a.util.SimpleSet,
                    filters: this.filters,
                    highlight: null,
                    loaded: !1,
                    page: 1,
                    index: null,
                    loading: !1,
                    pageCount: 0,
                    pageSize: 10,
                    results: null,
                    refresh: function(a) {
                        return void 0 === a && (a = !0), g.refresh(a)
                    },
                    error: null,
                    autoLoad: !0
                }, this.searchPromise = null, this.refreshPromise = null, this.es = e, this.$rootScope = f, b.indexVM = this.indexVM, b.ejs = d.ejs, b.filters = this.filters, b.$watchCollection("indexVM.filters.ejsObjects", function() {
                    g.indexVM.page = 1, g.search()
                }), b.$watchCollection("indexVM.aggregationProviders.objects", function() {
                    return g.search()
                }), b.$watch("indexVM.host", function() {
                    null != g.indexVM.host && e.setHost(g.indexVM.host) && g.search()
                }), b.$watch("indexVM.sort", function() {
                    g.indexVM.page = 1, g.search()
                }), b.$watch("indexVM.page", function() {
                    return g.search()
                }), b.$watch("indexVM.index", function() {
                    return g.search()
                }), b.$watch("indexVM.query", function() {
                    return g.search()
                }), b.$watch("indexVM.highlight", function() {
                    return g.search()
                }), c(function() {
                    return g.loaded()
                }, 200)
            }
            return b.prototype.loaded = function() {
                this.indexVM.loaded || (this.indexVM.loaded = !0, this.indexVM.autoLoad && this.search())
            }, b.prototype.getSearchPromise = function() {
                for (var a = ejs.Request(), b = 0; b < this.indexVM.aggregationProviders.objects.length; b++) {
                    var c = this.indexVM.aggregationProviders.objects[b],
                        d = c(this.filters.ejsObjects);
                    a.agg(d)
                }
                var e = this.filters.getAsFilter();
                null != e && a.filter(e), a.query(null != this.indexVM.query ? this.indexVM.query : ejs.MatchAllQuery()), null != this.indexVM.sort && a.sort(this.indexVM.sort), null != this.indexVM.highlight && a.highlight(this.indexVM.highlight);
                var f = this.es.client.search({
                    index: this.indexVM.index,
                    size: this.indexVM.pageSize,
                    from: this.indexVM.pageSize * (this.indexVM.page - 1),
                    body: a
                });
                return f
            }, b.prototype.onError = function(a) {
                this.$rootScope.$broadcast("eui-search-error", a), this.indexVM.error = a
            }, b.prototype.search = function() {
                var a = this;
                this.indexVM.loaded && this.indexVM.index && (null != this.refreshPromise && (this.refreshPromise.abort(), this.refreshPromise = null), this.indexVM.loading = !0, this.searchPromise = this.getSearchPromise(), this.searchPromise.then(function(b) {
                    a.searchPromise = null, a.indexVM.error = null, a.onResult(b)
                }, function(b) {
                    a.searchPromise && (a.searchPromise = null, a.onError(b))
                }))
            }, b.prototype.refresh = function(a) {
                var b = this;
                void 0 === a && (a = !0), this.indexVM.loaded && this.indexVM.index && null == this.searchPromise && (this.indexVM.loading = !0, this.refreshPromise = this.getSearchPromise(), this.refreshPromise.then(function(c) {
                    b.refreshPromise = null, b.indexVM.error = null, b.onResult(c, a)
                }, function(a) {
                    b.refreshPromise && (b.refreshPromise = null, b.onError(a))
                }))
            }, b.prototype.onResult = function(a, b) {
                void 0 === b && (b = !1), b && null != this.indexVM.results && this.indexVM.results.hits.total == a.hits.total || (this.indexVM.results = a, this.indexVM.pageCount = Math.ceil(this.indexVM.results.hits.total / this.indexVM.pageSize)), this.indexVM.loading = !1
            }, b.$inject = ["$scope", "$timeout", "$window", "es", "$rootScope"], b
        }();
        b.IndexController = c
    }(b = a.controllers || (a.controllers = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b(b) {
                var c = this;
                this.filters = new a.util.FilterCollection, b.filters = this.filters, b.$watchCollection("filters.ejsObjects", function() {
                    return c.updateCombinedFilter()
                }), this.scope = b
            }
            return b.prototype.updateCombinedFilter = function() {
                this.scope.combinedFilter && this.scope.$parent.filters.remove(this.scope.combinedFilter), this.scope.combinedFilter = this.filters.getAsORFilter(), this.scope.combinedFilter && this.scope.$parent.filters.add(this.scope.combinedFilter)
            }, b.$inject = ["$scope"], b
        }();
        b.OrFilterController = c
    }(b = a.controllers || (a.controllers = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a(a) {
                this.scope = a
            }
            return a.prototype.init = function() {
                var a = this;
                this.scope.$watch("indexVM.sort", function() {
                    return a.updateEnabled()
                }), this.scope.$watch("sorting.sort", function() {
                    return a.updateSort()
                }), this.scope.$watch("sorting.enabled", function(b, c) {
                    b !== c && a.updateSort()
                }), this.updateSort()
            }, a.prototype.updateSort = function() {
                this.scope.sorting.enabled ? this.scope.indexVM.sort = this.scope.sorting.sort : this.isEnabledOnIndexScope() && (this.scope.indexVM.sort = null)
            }, a.prototype.updateEnabled = function() {
                this.scope.sorting.enabled = this.isEnabledOnIndexScope()
            }, a.prototype.isEnabledOnIndexScope = function() {
                return null != this.scope.indexVM.sort && angular.equals(this.scope.indexVM.sort.toJSON(), this.scope.sorting.sort.toJSON())
            }, a.$inject = ["$scope"], a
        }();
        a.SortController = b
    }(b = a.controllers || (a.controllers = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a(a, b) {
                this.esFactory = a, this.setHost(b)
            }
            return a.prototype.setHost = function(a) {
                return a === this.host ? !1 : (this.host = a, this.client = this.esFactory({
                    host: a,
                    calcDeadTimeout: "flat"
                }), !0)
            }, a.$inject = ["esFactory", "euiHost"], a
        }();
        a.ElasticService = b, a.services.service("es", b)
    }(b = a.services || (a.services = {}))
}(elasticui || (elasticui = {})), angular.module("elasticui", ["elasticsearch", "elasticui.filters", "elasticui.controllers", "elasticui.services", "elasticui.directives", "elasticui.widgets.directives"]);
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b;
        ! function(a) {
            a.directives = angular.module("elasticui.widgets.directives", []), a.default_agg_count = 0
        }(b = a.directives || (a.directives = {}))
    }(b = a.widgets || (a.widgets = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c;
        ! function(b) {
            var c = function() {
                function c(c) {
                    var d = {};
                    return d.restrict = "E", d.scope = !0, d.link = {
                        pre: function(d, e, f) {
                            a.util.AngularTool.setupBinding(c, d, f, ["field", "size"]), d.agg_name = d.field.replace(/[^a-z_0-9]/gim, "_") + "_" + b.default_agg_count++
                        }
                    }, d.template = '\r\n            <ul class="nav nav-list" eui-aggregation="ejs.TermsAggregation(agg_name).field(field).size(size)">\r\n                <li ng-repeat="bucket in aggResult.buckets">\r\n                    <label class="checkbox" eui-filter="ejs.TermsFilter(field, bucket.key)">\r\n                        <input type="checkbox" ng-model="filter.enabled">\r\n                        {{bucket.key}} ({{bucket.doc_count}})\r\n                    </label>\r\n                </li>\r\n            </ul>', d
                }
                return c.$inject = ["$parse"], c
            }();
            b.ChecklistDirective = c, b.directives.directive("euiChecklist", c)
        }(c = b.directives || (b.directives = {}))
    }(b = a.widgets || (a.widgets = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b;
        ! function(a) {
            var b = function() {
                function a() {
                    var a = {};
                    return a.restrict = "E", a.scope = !0, a.template = '\r\n            <ul class="pager">\r\n                <li ng-class="{disabled:indexVM.page <= 1}"><a href="" ng-click="indexVM.page=indexVM.page - 1">Previous</a></li>\r\n                <li ng-class="{disabled:indexVM.pageCount <= indexVM.page}"><a href="" ng-click="indexVM.page=indexVM.page + 1">Next</a></li>\r\n            </ul>', a
                }
                return a
            }();
            a.SimplePagingDirective = b, a.directives.directive("euiSimplePaging", b)
        }(b = a.directives || (a.directives = {}))
    }(b = a.widgets || (a.widgets = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c;
        ! function(b) {
            var c = function() {
                function c(c) {
                    var d = {};
                    return d.restrict = "E", d.scope = !0, d.link = {
                        pre: function(d, e, f) {
                            a.util.AngularTool.setupBinding(c, d, f, ["field", "size"]), d.agg_name = d.field.replace(/[^a-z_0-9]/gim, "_") + "_" + b.default_agg_count++
                        }
                    }, d.template = '\r\n            <ul class="nav nav-list" eui-aggregation="ejs.TermsAggregation(agg_name).field(field).size(size)">\r\n                <li ng-repeat="bucket in aggResult.buckets">\r\n                    <label eui-filter="ejs.TermsFilter(field, bucket.key)">\r\n                        <span ng-if="!filter.enabled"><a href="" ng-click="filter.enabled=true">{{bucket.key}} <span class="muted">({{bucket.doc_count}})</span></a></span>\r\n                        <span ng-if="filter.enabled">{{bucket.key}} <a href="" ng-click="filter.enabled=false" class="facet-remove">x</a></span>\r\n                    </label>\r\n                </li>\r\n            </ul>', d
                }
                return c.$inject = ["$parse"], c
            }();
            b.SingleselectDirective = c, b.directives.directive("euiSingleselect", c)
        }(c = b.directives || (b.directives = {}))
    }(b = a.widgets || (a.widgets = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a(a) {
                this.scope = a
            }
            return a.prototype.init = function() {
                var a = this;
                this.scope.$watch("indexVM.highlight", function() {
                    return a.updateEnabled()
                }), this.scope.$watch("highlighting.highlight", function() {
                    return a.updateHighlight()
                }), this.scope.$watch("highlighting.enabled", function(b, c) {
                    b !== c && a.updateHighlight()
                }), this.updateHighlight()
            }, a.prototype.updateHighlight = function() {
                this.scope.highlighting.enabled ? this.scope.indexVM.highlight = this.scope.highlighting.highlight : this.isEnabledOnIndexScope() && (this.scope.indexVM.highlight = null)
            }, a.prototype.updateEnabled = function() {
                this.scope.highlighting.enabled = this.isEnabledOnIndexScope()
            }, a.prototype.isEnabledOnIndexScope = function() {
                return null != this.scope.indexVM.highlight && angular.equals(this.scope.indexVM.highlight.toJSON(), this.scope.highlighting.highlight.toJSON())
            }, a.$inject = ["$scope"], a
        }();
        a.HighlightController = b
    }(b = a.controllers || (a.controllers = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a(a) {
                this.scope = a
            }
            return a.prototype.init = function() {
                var a = this;
                this.scope.$watch("indexVM.host", function() {
                    return a.readHost()
                }), this.scope.$watch("host", function() {
                    return a.updateHost()
                }), this.updateHost()
            }, a.prototype.updateHost = function() {
                null !== this.scope.host && (this.scope.indexVM.host = this.scope.host)
            }, a.prototype.readHost = function() {
                this.scope.host = this.scope.indexVM.host
            }, a.$inject = ["$scope"], a
        }();
        a.HostController = b
    }(b = a.controllers || (a.controllers = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b(a) {
                this.scope = a
            }
            return b.prototype.init = function() {
                var b = this;
                this.scope.$watch("query.enabled", function(a, c) {
                    a !== c && b.updateQuery()
                }), this.scope.$watch("query.query", function(c, d) {
                    a.util.EjsTool.equals(d, c) || b.updateQuery()
                }), this.updateQuery()
            }, b.prototype.updateQuery = function() {
                this.scope.query.query && (this.scope.indexVM.query = this.scope.query.enabled ? this.scope.query.query : null)
            }, b.$inject = ["$scope"], b
        }();
        b.QueryController = c
    }(b = a.controllers || (a.controllers = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b() {
                var b = {};
                return b.restrict = "A", b.scope = !0, b.controller = a.controllers.HighlightController, b.link = function(a, b, c, d) {
                    a.$watch(b.attr("eui-highlight") + " | euiCached", function(b) {
                        return a.highlighting.highlight = b
                    });
                    var e = !1,
                        f = b.attr("eui-enabled");
                    f && (a.$watch(f, function(b) {
                        return a.highlighting.enabled = b
                    }), e = a.$eval(f)), a.highlighting = {
                        highlight: a.$eval(b.attr("eui-highlight") + " | euiCached"),
                        enabled: e
                    }, d.init()
                }, b
            }
            return b
        }();
        b.HighlightDirective = c, b.directives.directive("euiHighlight", c)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b() {
                var b = {};
                return b.restrict = "A", b.scope = !0, b.controller = a.controllers.HostController, b.link = function(a, b, c, d) {
                    a.$watch(b.attr("eui-host"), function(b) {
                        return a.host = b
                    }), a.host = a.$eval(b.attr("eui-host")), d.init()
                }, b
            }
            return b
        }();
        b.HostDirective = c, b.directives.directive("euiHost", c)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c = function() {
            function b() {
                var b = {};
                return b.restrict = "A", b.scope = !0, b.controller = a.controllers.QueryController, b.link = function(a, b, c, d) {
                    a.$watch(b.attr("eui-query") + " | euiCached", function(b) {
                        return a.query.query = b
                    });
                    var e = !1,
                        f = b.attr("eui-enabled");
                    f && (a.$watch(f, function(b) {
                        return a.query.enabled = b
                    }), e = a.$eval(f)), a.query = {
                        query: a.$eval(b.attr("eui-query") + " | euiCached"),
                        enabled: e
                    }, d.init()
                }, b
            }
            return b
        }();
        b.QueryDirective = c, b.directives.directive("euiQuery", c)
    }(b = a.directives || (a.directives = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {}
            return a.setupBinding = function(a, b, c, d) {
                angular.forEach(d, function(d) {
                    b.$watch(c[d], function(a) {
                        b[d] != a && (b[d] = a)
                    }), b[d] = a(c[d])(b)
                })
            }, a
        }();
        a.AngularTool = b
    }(b = a.util || (a.util = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {}
            return a.getJsonFromEjsObject = function(a) {
                return angular.toJson(a.toJSON())
            }, a.equals = function(a, b) {
                return !a && !b || a && b && this.getJsonFromEjsObject(a) == this.getJsonFromEjsObject(b)
            }, a
        }();
        a.EjsTool = b
    }(b = a.util || (a.util = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(a) {
        var b = function() {
            function a() {
                this.objects = []
            }
            return a.prototype.indexOf = function(a) {
                return this.objects.indexOf(a)
            }, a.prototype.add = function(a) {
                var b = this.indexOf(a); - 1 == b && this.objects.push(a)
            }, a.prototype.remove = function(a) {
                var b = this.indexOf(a);
                b > -1 && this.objects.splice(b, 1)
            }, a
        }();
        a.SimpleSet = b
    }(b = a.util || (a.util = {}))
}(elasticui || (elasticui = {}));
var elasticui;
! function(a) {
    var b;
    ! function(b) {
        var c;
        ! function(b) {
            var c = function() {
                function b(b) {
                    var c = {};
                    return c.restrict = "E", c.scope = !0, c.link = {
                        pre: function(c, d, e) {
                            a.util.AngularTool.setupBinding(b, c, e, ["field"])
                        }
                    }, c.template = '\r\n            <input type="text" eui-query="ejs.MatchQuery(field, querystring)" ng-model="querystring" eui-enabled="querystring.length" />\r\n            ', c
                }
                return b.$inject = ["$parse"], b
            }();
            b.SearchboxDirective = c, b.directives.directive("euiSearchbox", c)
        }(c = b.directives || (b.directives = {}))
    }(b = a.widgets || (a.widgets = {}))
}(elasticui || (elasticui = {}));
