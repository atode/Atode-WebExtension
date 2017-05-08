import React, { Component } from 'react';

export class SettingsSkeleton extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
      </div>
    );
  }
}

// @TODO: connect backend
const Settings = SettingsSkeleton;

export { Settings };
