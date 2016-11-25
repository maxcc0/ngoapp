import React from 'react';
export default class Overview extends React.Component { 
render() {
    return (
        <section className='.feature-section'>
        <JoyOfGiving/>
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
                                We are willing to take any clothes that you may not wish to use again. However, keep in mind that the clothes you donate are clean and can be used again by someone.
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Books & Stationery</div>
                            <span className='text-muted feature-desc'>
                                You may donate any books that you or your children will not use in the future.  The books should be in a usable condition, i.e., they should not be torn or be missing pages. You may also donate old colors, pencils, pens etc. However, make sure that the pens you donate do have ink left in them.
                            </span>
                        </div>
                    </div>
                </div>
                <div className='row feature-section'>

                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Toys</div>
                            <span className='text-muted feature-desc'>
                                Toys are another item that you can donate. You may donate any toy, there is no age group limit to that, however, please ensure that any toy you donate is not broken or missing any <parts className=""></parts>
                            </span>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Food Items</div>
                            <span className='text-muted feature-desc'>
                                You may also donate any excess food items. However, please try and ensure that the food you donate is not too old and can still be consumed.</span>
                        </div>
                    </div>

                </div>
                <div className='row feature-section'>
                    <div className='col-sm-6'>
                        <div className='card-block'>
                            <div className='title'>Unexpired Medicines</div>
                            <span className='text-muted feature-desc'>
                                You may also donate unexpired medicines. The medicines should be those that can be obtained without any prescription.</span>
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
                        <h2 className='font-light'> What can you donate?</h2>
                            <br/>
                       <small></small>
                        <br/>
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