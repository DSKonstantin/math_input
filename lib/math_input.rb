require 'math_input/version'
require 'math_input/engine'
require 'math_input/simple_form_extension' if Gem::Specification.find_by_name('simple_form') rescue Gem::LoadError


# def gem_available?(name)
#   Gem::Specification.find_by_name(name)
# rescue Gem::LoadError
#   false
# rescue
#   Gem.available?(name)
# end
