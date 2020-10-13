import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as postsModule from '../../redux/modules/posts';
import * as postsSelectors from '../../redux/selectors/posts';
import Spacing from '../../../../components/Spacing';
import style from './style';
import FooterText from './FooterText';

const PostsListItem = ({postId, index}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsModule.getPost({postId}));
  }, [postId, dispatch]);

  const postData = useSelector((state) =>
    postsSelectors.getSinglePostDataById(state, postId),
  );

  const postIndex = useSelector((state) =>
    postsSelectors.getOriginalPostIndex(state, index),
  );
  if (!postData || !postData.post || postData.isLoading) {
    return null;
  }
  const {title, url} = postData.post;
  return (
    <Spacing style={style.container} size={2} vertical horizontal>
      <View style={style.indexContainer}>
        <Text>{postIndex + 1}</Text>
      </View>
      <View style={style.contentContainer}>
        <View style={style.titleAndLinkContainer}>
          <Text>
            {title} <Text style={style.muttedText}>({url})</Text>
          </Text>
        </View>
        <Spacing size={1} top style={style.otherInfoContainer}>
          <FooterText post={postData.post} />
        </Spacing>
      </View>
    </Spacing>
  );
};

PostsListItem.defaultProps = {
  postId: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default PostsListItem;
