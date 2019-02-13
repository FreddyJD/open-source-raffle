import React, { Component } from 'react'

export default class RafflesData extends Component {
  render() {
    return (
    <>
    <div class="account-tab">
        <h4>Here is a place</h4>
        <p>Passwords must be at least 6 characters in length.</p>
        <form>
            <div class="row">
                <div class="col-12">
                    <label>Old Password:</label>
                    <input type="password" name="old-password" />
                </div>
                <div class="col-md-6">
                    <label>New Password:</label>
                    <input type="password" name="new-password" />
                </div>
                <div class="col-md-6">
                    <label>Retype New Password:</label>
                    <input type="password" name="new-password-confirm" />
                </div>
                <div class="col-lg-3 col-md-4">
                    <button type="submit" class="btn btn--primary type--uppercase">Test Button</button>
                </div>
            </div>
        </form>
    </div>
    </>
    )
  }
}
