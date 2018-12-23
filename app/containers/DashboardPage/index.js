/*
 * Dashboard
 *
 * This is the first page thing users see of our App after logging in, at the '/dashboard' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withAuth from '../../services/withAuth';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// Import Material-UI

// Import Components
import AvailableFunds from './AvailableFunds';
import BankInformation from './BankInformation';
import AccountBills from './AccountBills';
import RecentTransactions from './RecentTransactions';
import AuthService from '../../services/AuthService';

// Import Styles
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  grid: {
    width: '100%',
    margin: '-12px auto',
  },
  container: {
    margin: '10px auto',
    width: '1100px',
  },
  informationHeader: {
    display: 'flex',
    fontSize: 13.5,
    paddingBottom: 5,
    marginTop: '-10px',
  },
  informationHeaderFirst: {
    flex: 1,
  },
  informationHeaderLast: {
    textAlign: 'right',
  },
});

class DashboardPage extends Component {
  constructor(props) {
    super(props);

    this.Auth = new AuthService();
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Helmet title="Dashboard - Bank Application" />
        <div className={classes.container}>
          <Grid container spacing={24} className={classes.grid}>
            <Grid item xs={4}>
              <AvailableFunds id={this.props.user.id} />
            </Grid>
            <Grid item xs={4}>
              <BankInformation />
            </Grid>
            <Grid item xs={4}>
              <BankInformation />
            </Grid>
            <Grid item xs={8}>
              <AccountBills id={this.props.user.id} />
            </Grid>
            <Grid item xs={4}>
              <RecentTransactions id={this.props.user.id} />
            </Grid>

            {/* <Grid item xs={4}>
              <AccountBills />
            </Grid>
            <Grid item xs={4}>
              <AccountBills />
            </Grid>
            <Grid item xs={4}>
              <AccountBills />
            </Grid> */}
          </Grid>
        </div>
      </Fragment>
    );
  }
}

DashboardPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withAuth(withStyles(styles)(DashboardPage));
