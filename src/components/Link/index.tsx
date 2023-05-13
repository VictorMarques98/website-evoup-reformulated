import "./styles.css";

interface LinkProps {
  text: string
  link: string
  variant?: 'primary' | 'secondary'
}

const Link = (props: LinkProps) => {
  const { 
    text, 
    link, 
    variant = 'primary'
  } = props;

  const linkVariants = {
    primary: "link-primary",
    secondary: "link-secondary"
  };

  return (
    <a
      href={link}
      className={linkVariants[variant]}
    >
      {text}
    </a>
  );
}

export default Link;