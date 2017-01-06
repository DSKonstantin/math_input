(function($) {
    $.fn.mathInput = function(options) {
        var _calculateResult, _checkLastCharacter, _clearValue, _revertValue, _validateValue;
        this.settings = {
            valid_characters: (options != null ? options.valid_characters : void 0) || '0123456789+-()*/.',
            error_timeout: (options != null ? options.error_timeout : void 0) || 1200,
            exclude_last_characters: (options != null ? options.exclude_last_characters : void 0) || ['+', '-', '*', '/', ')', '('],
            decimal_count: (options != null ? options.decimal_count : void 0) || this.data('decimalCount') || 2,
            error_text: (options != null ? options.error_text : void 0) || this.data('errorText') || 'ERROR'
        };
        this.on('keypress', function(event) {
            return _validateValue(event);
        });
        this.on('change', function(event) {
            return _calculateResult(event);
        });
        this.on('click', function(event) {
            return _clearValue(event);
        });
        $(document).on('mouseup', function(event) {
            return _revertValue(event);
        });
        _revertValue = (function(_this) {
            return function(event) {
                var ref, ref1;
                if (!((ref = _this.keep_element) != null ? ref.is(event.target) : void 0) && ((ref1 = _this.keep_element) != null ? ref1.has(event.target).length : void 0) === 0) {
                    if (_this.keep_element.val() === '') {
                        return _this.keep_element.val(parseFloat(0).toFixed(_this.settings.decimal_count));
                    }
                }
            };
        })(this);
        _clearValue = (function(_this) {
            return function(event) {
                _this.keep_element = $(event.currentTarget);
                if ($(event.currentTarget).val() === '0.00' || $(event.currentTarget).val() === '0') {
                    return $(event.currentTarget).val('');
                }
            };
        })(this);
        _validateValue = (function(_this) {
            return function(event) {
                var chr;
                if (event.keyCode === 13) {
                    event.preventDefault();
                    $(event.currentTarget).trigger('change');
                }
                chr = String.fromCharCode(event.which);
                if (_this.settings.valid_characters.indexOf(chr) < 0) {
                    _this.blockCalculation = true;
                    return false;
                } else {
                    _this.blockCalculation = false;
                }
            };
        })(this);
        _calculateResult = (function(_this) {
            return function(event) {
                var finishVal, newVal, startVal;
                if (_this.blockCalculation) {
                    return;
                }
                startVal = _checkLastCharacter($(event.currentTarget).val());
                newVal = eval(startVal);
                finishVal = newVal ? newVal : 0.00;
                if (finishVal === Infinity) {
                    $(event.currentTarget).addClass('math-input-error').val(_this.settings.error_text);
                    return setTimeout((function() {
                        finishVal = Number(0).toFixed(_this.settings.decimal_count);
                        return $(event.currentTarget).val(Number(finishVal).toFixed(_this.settings.decimal_count)).removeClass('math-input-error').trigger('change');
                    }), _this.settings.error_timeout);
                } else {
                    return $(event.currentTarget).val(Number(finishVal).toFixed(_this.settings.decimal_count));
                }
            };
        })(this);
        return _checkLastCharacter = (function(_this) {
            return function(val) {
                if (jQuery.inArray(val[val.length - 1], _this.settings.exclude_last_characters) !== -1) {
                    val = val.slice(0, -1);
                }
                if (jQuery.inArray(val[val.length - 1], _this.settings.exclude_last_characters) !== -1) {
                    return _checkLastCharacter(val);
                } else {
                    return val;
                }
            };
        })(this);
    };
})(jQuery);