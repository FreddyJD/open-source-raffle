import React, { Component } from 'react';
import UserData from './UserData';
import RafflesData from './RafflesData';

export default class User extends Component {
  render() {
    return (
      <>
        <section class="bg--secondary space--sm">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="boxed boxed--lg boxed--border">
                                <UserData/>
                            </div>
                        </div>

                        <div class="col-lg-8">
                            <div class="boxed boxed--lg boxed--border">
                                <RafflesData/>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
      </>
    )
  }
}
