import React from 'react';

import PasswordInput from 'components/UI/input/Password';
import SeedInput from 'components/UI/input/Seed';
import AmountInput from 'components/UI/input/Amount';
import MessageInput from 'components/UI/input/Message';
import Select from 'components/UI/Select';

class Inputs extends React.PureComponent {
    state = {
        password: '',
        seed: '',
        ammount: '0',
        message: '',
    };

    render() {
        return (
            <div>
                <Select label="Select" defaultValue="en" onChange={(e) => {}}>
                    <option value="en">English (International)</option>
                    <option value="ar">عربى - Arabic</option>
                    <option value="da">Dansk - Danish</option>
                    <option value="de">Deutsch - German</option>
                    <option value="el">Ελληνικά - Greek</option>
                </Select>
                <PasswordInput
                    value={this.state.password}
                    label="Password"
                    name="password"
                    onChange={(value) => this.setState({ password: value })}
                />
                <SeedInput
                    seed={this.state.seed}
                    label="Seed"
                    closeLabel="Back"
                    onChange={(value) => this.setState({ seed: value })}
                />
                <AmountInput
                    amount={this.state.ammount}
                    settings={{ currency: 'USD' }}
                    label="Ammount"
                    labelMax="Max"
                    balance={2000}
                    onChange={(value) => this.setState({ ammount: value })}
                />
                <MessageInput
                    message={this.state.message}
                    label="Auto size"
                    onChange={(value) => this.setState({ message: value })}
                />
            </div>
        );
    }
}

export default Inputs;
