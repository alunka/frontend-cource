import './ContactList.css'

const ContactList = () => {
    return(
        <>
        <div style={{height: '100%'}}>
            <div class="card main-cards" style={{width: '30%'}}>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            <div class="card main-cards" style={{width: '60%'}}>
            <div class="card-body">
                <h5 class="card-title">Table</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default ContactList