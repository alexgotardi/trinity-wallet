/* global Electron */
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Button from 'ui/components/Button';

import css from './index.scss';

/**
 * Onboarding complete component
 */
class Done extends React.PureComponent {
    static propTypes = {
        /** @ignore */
        history: PropTypes.object.isRequired,
        /** @ignore */
        t: PropTypes.func.isRequired,
    };

    /**
     * Navigate to Login view
     * @returns {undefined}
     */
    setComplete = () => {
        const { history } = this.props;
        Electron.garbageCollect();
        history.push('/onboarding/login');
    };

    render() {
        const { t } = this.props;
        return (
            <form>
                <section className={css.done}>
                    <h1>{t('onboardingComplete:allDone')}</h1>
                    <p>{t('onboardingComplete:walletReady')}</p>
                    <svg width="783px" height="783px" viewBox="0 0 783 783">
                        <path
                            d="M218.884005,533.727167 C215.9474,537.193399 214.006078,540.112684 213.059441,542.384615 C212.741105,543.148622 212.577572,543.733732 212.521871,544.131873 C212.655533,544.19853 212.811648,544.270083 212.989218,544.344645 C213.957333,544.751153 215.310507,545.141899 216.967168,545.477025 C220.378809,546.167166 224.784842,546.56539 229.48251,546.625616 C233.941041,546.682777 238.379939,546.42945 241.861179,545.934151 C242.470993,545.847389 243.039244,545.754752 243.559255,545.658335 C242.588219,543.120937 240.854147,539.887018 237.933167,535.018718 C237.689728,534.612986 237.435845,534.191882 237.153269,533.724925 C234.124547,533.907465 231.072647,534 228,534 C224.939957,534 221.900493,533.908223 218.884005,533.727167 Z M201.763731,531.711724 C128.099465,518.716678 72,451.932679 72,371.5 C72,281.753728 141.843579,209 228,209 C314.156421,209 384,281.753728 384,371.5 C384,452.218027 327.501785,519.19036 253.4516,531.847997 C255.309356,535.144637 256.610477,537.788125 257.579002,540.324738 C258.552916,542.875467 259.12415,545.201624 259.203697,547.455459 C259.321474,550.792478 258.336239,553.906726 255.939664,556.303301 C252.743571,559.499395 245.620745,561.076042 236.616964,561.509357 C235.206681,585.99798 242.258783,607.81762 257.856516,627.314787 C277.429661,651.781218 288.664001,679.164921 291.467759,709.305325 L276.532241,710.694675 C274.002666,683.501746 263.903672,658.885448 246.143484,636.685213 C228.350487,614.443967 220.144608,589.194304 221.607613,561.276569 C212.007192,560.477789 204.703713,558.269672 200.941939,553.880935 C196.87279,549.133594 196.550312,543.006524 199.213287,536.615385 C199.871348,535.036037 200.721511,533.403982 201.763731,531.711724 Z M228,519 C305.732063,519 369,453.095899 369,371.5 C369,289.904101 305.732063,224 228,224 C150.267937,224 87,289.904101 87,371.5 C87,453.095899 150.267937,519 228,519 Z"
                            id="baloon-2"
                        />
                        <path
                            d="M565.115995,533.727167 C562.099507,533.908223 559.060043,534 556,534 C552.927353,534 549.875453,533.907465 546.846731,533.724925 C546.564155,534.191882 546.310272,534.612986 546.066833,535.018718 C543.145853,539.887018 541.411781,543.120937 540.440745,545.658335 C540.960756,545.754752 541.529007,545.847389 542.138821,545.934151 C545.620061,546.42945 550.058959,546.682777 554.51749,546.625616 C559.215158,546.56539 563.621191,546.167166 567.032832,545.477025 C568.689493,545.141899 570.042667,544.751153 571.010782,544.344645 C571.188352,544.270083 571.344467,544.19853 571.478129,544.131873 C571.422428,543.733732 571.258895,543.148622 570.940559,542.384615 C569.993922,540.112684 568.0526,537.193399 565.115995,533.727167 Z M582.236269,531.711724 C583.278489,533.403982 584.128652,535.036037 584.786713,536.615385 C587.449688,543.006524 587.12721,549.133594 583.058061,553.880935 C579.296287,558.269672 571.992808,560.477789 562.392387,561.276569 C563.855392,589.194304 555.649513,614.443967 537.856516,636.685213 C520.096328,658.885448 509.997334,683.501746 507.467759,710.694675 L492.532241,709.305325 C495.335999,679.164921 506.570339,651.781218 526.143484,627.314787 C541.741217,607.81762 548.793319,585.99798 547.383036,561.509357 C538.379255,561.076042 531.256429,559.499395 528.060336,556.303301 C525.663761,553.906726 524.678526,550.792478 524.796303,547.455459 C524.87585,545.201624 525.447084,542.875467 526.420998,540.324738 C527.389523,537.788125 528.690644,535.144637 530.5484,531.847997 C456.498215,519.19036 400,452.218027 400,371.5 C400,281.753728 469.843579,209 556,209 C642.156421,209 712,281.753728 712,371.5 C712,451.932679 655.900535,518.716678 582.236269,531.711724 Z M556,519 C633.732063,519 697,453.095899 697,371.5 C697,289.904101 633.732063,224 556,224 C478.267937,224 415,289.904101 415,371.5 C415,453.095899 478.267937,519 556,519 Z"
                            id="baloon-1"
                        />
                        <g id="baloon-3">
                            <path d="M392,488 C282.095335,488 193,395.099086 193,280.5 C193,165.900914 282.095335,73 392,73 C501.904665,73 591,165.900914 591,280.5 C591,395.099086 501.904665,488 392,488 Z" />
                            <path
                                d="M392,473 C493.476787,473 576,386.951926 576,280.5 C576,174.048074 493.476787,88 392,88 C290.523213,88 208,174.048074 208,280.5 C208,386.951926 290.523213,473 392,473 Z"
                                id="baloon-mask"
                            />
                            <path d="M392.5,671.002994 L377.5,671.002994 L377.5,511.058312 C368.154927,510.463845 361.369433,509.368088 358.141282,507.431197 C352.846153,504.25412 351.900635,498.581012 353.884875,492.628292 C355.181901,488.737213 357.86418,484.139022 361.951963,478.564773 L374.048037,487.435227 C371.776944,490.532173 370.123389,493.127737 369.094313,495.129767 C369.736732,495.227422 370.437276,495.322766 371.189862,495.414617 C374.803494,495.855651 379.424068,496.193457 384.288248,496.380541 C389.027668,496.562827 393.712202,496.590383 397.453169,496.457829 C397.663405,496.450379 397.869961,496.442446 398.072693,496.434042 C397.586832,495.422367 397.083837,494.449585 396.529927,493.437266 C395.703237,491.926419 394.808684,490.408765 393.913994,488.969033 C393.601277,488.46581 393.312118,488.010212 393.054761,487.612133 C392.905905,487.381883 392.804802,487.22802 392.759623,487.160251 L405.240377,478.839749 C405.539284,479.288108 406.031535,480.049522 406.654377,481.051796 C407.685965,482.711822 408.717691,484.462199 409.68886,486.237095 C410.363369,487.469818 410.986177,488.674317 411.54728,489.842328 C413.00931,492.885736 414.014314,495.573276 414.461985,498.028242 C414.813203,499.954281 414.840009,501.777099 414.356334,503.604315 C413.602432,506.45239 411.656697,508.815068 408.78543,509.963575 C405.995957,511.079364 400.088838,511.55798 392.5,511.554154 L392.5,671.002994 Z" />
                            <path d="M262.5,271 C262.5,280 247.5,280 247.5,271 C247.5,207.543633 272.723136,163.49196 322.838851,140.19874 C329.161149,137 337,149 329.161149,153.80126 C284.610198,174.50804 262.5,213.123033 262.5,271 Z" />
                        </g>
                    </svg>
                </section>
                <footer>
                    <Button onClick={this.setComplete} className="square" variant="primary">
                        {t('onboardingComplete:openYourWallet')}
                    </Button>
                </footer>
            </form>
        );
    }
}

export default withTranslation()(Done);
