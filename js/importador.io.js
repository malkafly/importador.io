/*!
 * Importador.IO - Um plugin que se importa.
 * Author: Daniel Malkafly
 * Git: https://github.com/malkafly
 * License: MIT
 */

(function (root, factory) {
    var pluginName = 'ImportadorIO';

    if (typeof define === 'function' && define.amd) {
        define([], factory(pluginName));
    } else if (typeof exports === 'object') {
        module.exports = factory(pluginName);
    } else {
        root[pluginName] = factory(pluginName);
    }
}(this, function (pluginName) {
    'use strict';

    var eumeimportation = [
        'Poxa campeão, deu pau... EU sei que você consegue arrumar!',
        'Força brother, não deu desta vez mas tenta novamente...',
        'Até ia dar certo, mas não. Bora arrumar que sei que tá fácil!',
        'Fechow, agora só falta funcionar :D',
        'Ô louco meu! Quem sabe quebra ao vivo!',
        'Você traiu o movimento punk véio!'
    ];

    var defaults = {
        someDefaultOption: 'foo'
    };

    /**
     * Merge defaults with user options
     * @param {Object} defaults Default settings
     * @param {Object} options User options
     */
    var extend = function (target, options) {
        var prop, extended = {};
        for (prop in defaults) {
            if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
                extended[prop] = defaults[prop];
            }
        }
        for (prop in options) {
            if (Object.prototype.hasOwnProperty.call(options, prop)) {
                extended[prop] = options[prop];
            }
        }
        return extended;
    };

    /**
     * Plugin Object
     * @param element The html element to initialize
     * @param {Object} options User options
     * @constructor
     */
    function Plugin(element, options) {
        this.element = element;
        this.options = extend(defaults, options);
    }


    // Plugin prototype
    Plugin.prototype = {

        mandaimports: function() {
            //this.element.innerHTML = this.options.someDefaultOption;
            return eumeimportation[Math.floor(Math.random()*eumeimportation.length)];
        }

    };


    // add lightweight jQuery wrapper, if available
    if(window.jQuery) {
        var $ = window.jQuery;

        $.fn[pluginName] = function ( options ) {
            options = options || {};

            return this.each(function() {
                // add plugin to element data
                if (!$.data(this, 'plugin_'+pluginName) ) {
                    options.element = this;
                    $.data(this, 'plugin_'+pluginName, new Plugin(this, options));
                }
            });
        };
    }
    return Plugin;
}));
