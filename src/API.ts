/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateServiceInput = {
  id?: string | null,
  name: string,
};

export type UpdateServiceInput = {
  id: string,
  name?: string | null,
};

export type DeleteServiceInput = {
  id?: string | null,
};

export type CreateFeatureInput = {
  id?: string | null,
  title: string,
  description: string,
  featureServiceId?: string | null,
};

export type UpdateFeatureInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  featureServiceId?: string | null,
};

export type DeleteFeatureInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  content?: string | null,
  commentCommentId?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  content?: string | null,
  commentCommentId?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type ModelServiceFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  and?: Array< ModelServiceFilterInput | null > | null,
  or?: Array< ModelServiceFilterInput | null > | null,
  not?: ModelServiceFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFeatureFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelFeatureFilterInput | null > | null,
  or?: Array< ModelFeatureFilterInput | null > | null,
  not?: ModelFeatureFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDFilterInput | null,
  content?: ModelStringFilterInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type CreateServiceMutationVariables = {
  input: CreateServiceInput,
};

export type CreateServiceMutation = {
  createService:  {
    __typename: "Service",
    id: string,
    name: string,
    roadmap:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        id: string,
        title: string,
        description: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateServiceMutationVariables = {
  input: UpdateServiceInput,
};

export type UpdateServiceMutation = {
  updateService:  {
    __typename: "Service",
    id: string,
    name: string,
    roadmap:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        id: string,
        title: string,
        description: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteServiceMutationVariables = {
  input: DeleteServiceInput,
};

export type DeleteServiceMutation = {
  deleteService:  {
    __typename: "Service",
    id: string,
    name: string,
    roadmap:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        id: string,
        title: string,
        description: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateFeatureMutationVariables = {
  input: CreateFeatureInput,
};

export type CreateFeatureMutation = {
  createFeature:  {
    __typename: "Feature",
    id: string,
    title: string,
    description: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      roadmap:  {
        __typename: "ModelFeatureConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateFeatureMutationVariables = {
  input: UpdateFeatureInput,
};

export type UpdateFeatureMutation = {
  updateFeature:  {
    __typename: "Feature",
    id: string,
    title: string,
    description: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      roadmap:  {
        __typename: "ModelFeatureConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteFeatureMutationVariables = {
  input: DeleteFeatureInput,
};

export type DeleteFeatureMutation = {
  deleteFeature:  {
    __typename: "Feature",
    id: string,
    title: string,
    description: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      roadmap:  {
        __typename: "ModelFeatureConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
};

export type CreateCommentMutation = {
  createComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string | null,
      comment:  {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string | null,
      comment:  {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string | null,
      comment:  {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null,
    } | null,
  } | null,
};

export type GetServiceQueryVariables = {
  id: string,
};

export type GetServiceQuery = {
  getService:  {
    __typename: "Service",
    id: string,
    name: string,
    roadmap:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        id: string,
        title: string,
        description: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: ModelServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices:  {
    __typename: "ModelServiceConnection",
    items:  Array< {
      __typename: "Service",
      id: string,
      name: string,
      roadmap:  {
        __typename: "ModelFeatureConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFeatureQueryVariables = {
  id: string,
};

export type GetFeatureQuery = {
  getFeature:  {
    __typename: "Feature",
    id: string,
    title: string,
    description: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      roadmap:  {
        __typename: "ModelFeatureConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListFeaturesQueryVariables = {
  filter?: ModelFeatureFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturesQuery = {
  listFeatures:  {
    __typename: "ModelFeatureConnection",
    items:  Array< {
      __typename: "Feature",
      id: string,
      title: string,
      description: string,
      service:  {
        __typename: "Service",
        id: string,
        name: string,
      } | null,
      comments:  {
        __typename: "ModelCommentConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string | null,
      comment:  {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments:  {
    __typename: "ModelCommentConnection",
    items:  Array< {
      __typename: "Comment",
      id: string,
      content: string | null,
      comment:  {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateServiceSubscription = {
  onCreateService:  {
    __typename: "Service",
    id: string,
    name: string,
    roadmap:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        id: string,
        title: string,
        description: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateServiceSubscription = {
  onUpdateService:  {
    __typename: "Service",
    id: string,
    name: string,
    roadmap:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        id: string,
        title: string,
        description: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteServiceSubscription = {
  onDeleteService:  {
    __typename: "Service",
    id: string,
    name: string,
    roadmap:  {
      __typename: "ModelFeatureConnection",
      items:  Array< {
        __typename: "Feature",
        id: string,
        title: string,
        description: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateFeatureSubscription = {
  onCreateFeature:  {
    __typename: "Feature",
    id: string,
    title: string,
    description: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      roadmap:  {
        __typename: "ModelFeatureConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateFeatureSubscription = {
  onUpdateFeature:  {
    __typename: "Feature",
    id: string,
    title: string,
    description: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      roadmap:  {
        __typename: "ModelFeatureConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteFeatureSubscription = {
  onDeleteFeature:  {
    __typename: "Feature",
    id: string,
    title: string,
    description: string,
    service:  {
      __typename: "Service",
      id: string,
      name: string,
      roadmap:  {
        __typename: "ModelFeatureConnection",
        nextToken: string | null,
      } | null,
    } | null,
    comments:  {
      __typename: "ModelCommentConnection",
      items:  Array< {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string | null,
      comment:  {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string | null,
      comment:  {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment:  {
    __typename: "Comment",
    id: string,
    content: string | null,
    comment:  {
      __typename: "Comment",
      id: string,
      content: string | null,
      comment:  {
        __typename: "Comment",
        id: string,
        content: string | null,
      } | null,
    } | null,
  } | null,
};
