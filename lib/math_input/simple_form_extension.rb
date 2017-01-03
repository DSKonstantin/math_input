class MathPickerInput < SimpleForm::Inputs::StringInput

  def input(wrapper_options)
    input_html_classes << 'math-picker form-control'
    input_html_options[:type] = 'text'
    super
  end

end