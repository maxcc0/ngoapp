import React from 'react';
export default class Overview extends React.Component { 
render() {
    return (
        <section className='.feature-section'>
        <JoyOfGiving/>
        <Benefits/>
        </section>
    )
}
}
class Benefits extends React.Component {


    render() {

        return (
            <section className='text-center'>
                <div className='row feature-section'>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Clothes</div>
                            <span className='text-muted feature-desc'>
                                Some text that says what type of clothes etc. We will put some fancy icons over here so that it looks cool.
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Books</div>
                            <span className='text-muted feature-desc'>
                                Some text that says what type of clothes etc. We will put some fancy icons over here so that it looks cool.
                            </span>
                        </div>
                    </div>
                </div>
                <div className='row feature-section'>

                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Toys</div>
                            <span className='text-muted feature-desc'>
                                Some text that says what type of clothes etc. We will put some fancy icons over here so that it looks cool.
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Stationery</div>
                            <span className='text-muted feature-desc'>
                                Some text that says what type of clothes etc. We will put some fancy icons over here so that it looks cool.</span>
                        </div>
                    </div>

                </div>
                <div className='row feature-section'>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Time</div>
                            <span className='text-muted feature-desc'>
                                Some text that says what type of clothes etc. We will put some fancy icons over here so that it looks cool.</span>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

class JoyOfGiving extends React.Component {
    render() {
        return (
            <div className='row peachu text-muted'>
                <div className="row text-center">
                    <div className="col-md-12">
                        <br/>
                        <h2 className='font-light'> How can you contribute?</h2>
                            <br/>
                       <small></small>
                        <br/><br/><br/>
                    </div>
                    <div className='col-md-12'>
                    <Benefits/>
                    </div>
                </div>
                <br/><br/>
            </div>

        )

    }

}