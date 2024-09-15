import { friends } from '../utils/constants'
import Friend from './Friend'

const DreamTeam = () => {
    return (
        <section className="ml-1 float-right w-1/2 border border-base-color rounded-b-3xl grid-cols-3 grid gap-0.5">
            <h2 className="col-span-3 text-center text-3xl">Dream Team</h2>
            {friends.map((friend, index) => <Friend key={index} pos={index + 1} picture={friend}/>)}
        </section>
    )
}

export default DreamTeam