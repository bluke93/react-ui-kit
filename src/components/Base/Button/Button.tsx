export interface ButtonProps {
  label: string;

  // appearance
  appearance?: 'primary' | 'secondary' | 'ghost' | 'highlighted' | 'text-only';
  size?: 'small' | 'medium' | 'large';
  shouldFit?: boolean;

  // icon
  iconOnly?: boolean;
  icon?: string;
  iconPosition?: 'before' | 'after';

  // status
  disabled?: boolean;
  loading?: boolean;

  // custom classes
  customClasses?: string;
  onClick?: () => void;
}

export function Button(buttonProps: ButtonProps) {
  const { appearance, size, shouldFit, disabled, loading, iconOnly, onClick } = buttonProps;
  let { label, icon, iconPosition, customClasses } = buttonProps;
  label = label ? label : 'Button';
  customClasses = customClasses ? customClasses : '';
  icon = icon ? icon : '';
  iconPosition = iconPosition ? iconPosition : 'before'; 

  return (
    <>
      <button 
        className={`btn btn--${appearance} btn--size-${size} ${shouldFit ? 'btn--full-width' : ''} ${iconOnly ? 'btn--icon-only' : ''} ${customClasses}`}
        disabled={disabled || loading}
        onClick={onClick}
      >
        { loading ? loadingRender() : 
          iconOnly ? iconOnlyRender({icon}) :
          icon ? labelAndIconRender({label, icon, iconPosition}) :
          soloLabelRender({label})
        }
      </button>
    </>
  )
}

function soloLabelRender({label}: Partial<ButtonProps>){
  return (
    <>
      { label }
    </>
  )
}

function labelAndIconRender({label, icon, iconPosition}: Partial<ButtonProps>){
  return (
    <>
      { icon && iconPosition === 'before' ? <i className={`fa-solid fa-${icon}`}></i> : '' }
      { label }
      { icon && iconPosition === 'after' ? <i className={`fa-solid fa-${icon}`}></i> : '' }
    </>
  )
}

function iconOnlyRender({icon}: Partial<ButtonProps>){
  return (
    <>
      <i className={`fa-solid fa-${icon}`}></i>
    </>
  )
}

function loadingRender(){
  return (
    <>
      <i className="fa-solid fa-spin fa-circle-notch"></i>
    </>
  )
}