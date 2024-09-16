interface FriendProps {
    picture: string,
    pos: number
}

const Friend = ({ picture, pos }: FriendProps) => {
    let styles;
    if (pos === 7) {
        styles = 'rounded-bl-3xl'
    }
    if (pos === 9) {
        styles = 'rounded-br-3xl'
    }
    return (
        <img className={styles} src={picture} alt="Friend" />
    )
}

export default Friend