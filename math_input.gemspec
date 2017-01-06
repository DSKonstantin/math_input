# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'math_input/version'

Gem::Specification.new do |spec|
  spec.name          = "math_input"
  spec.version       = MathInput::VERSION
  spec.authors       = ["Konstantin Dyachenko"]
  spec.email         = ["ko.dyachenko@gmail.com"]

  spec.description   = "This gem allows perform mathematical operations in the field."
  spec.homepage      = 'https://github.com/DSKonstantin/math_input'

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.13"
  spec.add_development_dependency "rake", "~> 10.0"
end
