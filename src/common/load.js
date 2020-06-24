import React from 'react';

export default (loadComp, LoadingComp = () => null) => (
    class AsyncComponent extends React.Component {
        constructor(args) {
            super(args);
            this.state = {
                Component: null,
                hot: false,
            };
        }

        componentDidMount() {
            const {Component} = this.state;
            if (Component) {
                return;
            }

            loadComp()
                .then((comp) => {
                    comp.onUpdate = (args) => {
                        this.setState({Component: args.default ? args.default : args, hot: true});
                    };
                    this.setState({Component: comp.default ? comp.default : comp}); // 提高兼容性
                })
                .catch((err) => {
                    console.error('Cannot load component in async component. ', err.message);
                });
        }

        render() {
            const {Component, hot} = this.state;
            // eslint-disable-next-line react/jsx-props-no-spreading
            return (Component) ? <Component {...this.props} hot={hot} /> : <LoadingComp {...this.props} />;
        }
    }
);
