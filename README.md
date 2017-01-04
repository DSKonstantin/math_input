# Rails Math Input Picker

This gem allows perform mathematical operations in the field.

![alt tag]('assets/images/demo.gif')

=======

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'math_input'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install math_input

## Usage

    //= require math_input        - include JS
    $('.math-picker').MathInput() - initialize Plugin

if you use simple_form gem then can use 
    
    as: :math_input

OR determine class on input

    <input class='math_input' .... >

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/math_input.

