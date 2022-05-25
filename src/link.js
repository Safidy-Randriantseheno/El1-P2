export default function Link(props){
    const{href,children} = props ;
    return (
        <a class="nav-link" href={href}>
                                  {children}
                                </a>
    )
}