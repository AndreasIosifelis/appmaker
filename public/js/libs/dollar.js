(function() {
    Array.prototype.contains = function(v) {
        var i, l = this.length;
        for (i = 0; i < l; i++) {
            if (this[i] === v || this[i] === v)
                return true;
        }
        return false;
    };

    Array.prototype.pushUnique = function(v) {
        !this.contains(v) ? this.push(v) : null;
        return this;
    };

    Array.prototype.getFirst = function() {
        return this[0];
    };

    Array.prototype.getLast = function() {
        return this[this.length - 1];
    };

    Array.prototype.removeAt = function(p, c) {
        c && c > 0 ? this.splice(p, c) : this.splice(p, 1);
    };
})();




