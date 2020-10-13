import React, {Component} from 'react';
import {
  Button,
  FlatList,
  View,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as postsModule from '../redux/modules/posts';
import * as postsSelectors from '../redux/selectors/posts';
import * as postsActions from '../redux/reducers/posts';
import PostsListItem from '../components/PostsListItem';

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class PostsMainScreen extends Component {
  interval;
  componentDidMount() {
    const {getPosts} = this.props;
    getPosts();
    this.interval = setInterval(() => {
      getPosts();
    }, 30000);
    this.renderItem = this.renderItem.bind(this);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  renderItem({item, index}) {
    return <PostsListItem postId={item} index={index} />;
  }
  render() {
    const {postIds, currentPage, setPage} = this.props;
    return (
      <SafeAreaView style={styles.flex1}>
        <View style={styles.flex1}>
          <FlatList
            data={postIds}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.toString()}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Prev"
              disabled={currentPage === 1}
              onPress={() => {
                setPage({nextPage: currentPage - 1});
              }}
            />
            <Text>|</Text>
            <Button
              title="Next"
              onPress={() => {
                setPage({nextPage: currentPage + 1});
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

PostsMainScreen.propTypes = {
  getPosts: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  postIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentPage: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    postIds: postsSelectors.getCurrentPagePostsIds(state),
    currentPage: postsSelectors.getCurrentPage(state),
  };
};

export default connect(mapStateToProps, {
  getPosts: postsModule.getPosts,
  setPage: postsActions.setPage,
})(PostsMainScreen);
