import React, { Component } from 'react';


class ClassDetailItem extends Component {

    render() {
console.log(this.props.subjectDetail);
        return (
            <div className="UserItem">
                <li>
                    {this.props.subjectDetail.classVal}

                </li>
            </div>
        );
    }
}

export default ClassDetailItem;
