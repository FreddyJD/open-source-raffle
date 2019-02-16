import React, { Component } from 'react'

export default class RafflesData extends Component {
  render() {
    return (
    <>
    <div className="account-tab">
        <h4>Here is a place</h4>
        <p>Passwords must be at least 6 characters in length.</p>
        <form>
            <div className="row">
                <div className="col-12">
                    <label>Old Password:</label>
                    <input type="password" name="old-password" />
                </div>
                <div className="col-md-6">
                    <label>New Password:</label>
                    <input type="password" name="new-password" />
                </div>
                <div className="col-md-6">
                    <label>Retype New Password:</label>
                    <input type="password" name="new-password-confirm" />
                </div>
                <div className="col-lg-3 col-md-4">
                    <button type="submit" className="btn btn--primary type--uppercase">Test Button</button>
                </div>
            </div>
        </form>
    </div>
    </>
    )
  }
}

