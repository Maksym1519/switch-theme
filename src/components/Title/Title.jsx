
const Title = ({ as = 'h1', children, className = '', ...props }) => {
    const Tag = as;
    
    return (
      <Tag
        className={className}
        {...props}
      >
        {children}
      </Tag>
    );
  };
 
 
  export default Title;