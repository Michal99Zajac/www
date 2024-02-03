import { z } from 'zod'
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: Date; output: Date; }
  DateTime: { input: Date; output: Date; }
  JSON: { input: any; output: any; }
  Upload: { input: File; output: File; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentCommonContact = {
  __typename?: 'ComponentCommonContact';
  email: Scalars['String']['output'];
  githubUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  linkedinUrl: Scalars['String']['output'];
};

export type ComponentCommonContactInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  linkedinUrl?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCommonExperienceLevel = {
  __typename?: 'ComponentCommonExperienceLevel';
  id: Scalars['ID']['output'];
  level: Enum_Componentcommonexperiencelevel_Level;
  numericLevel: Scalars['Int']['output'];
};

export type ComponentCommonExperienceLevelFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonExperienceLevelFiltersInput>>>;
  level?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonExperienceLevelFiltersInput>;
  numericLevel?: InputMaybe<IntFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonExperienceLevelFiltersInput>>>;
};

export type ComponentCommonExperienceLevelInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  level?: InputMaybe<Enum_Componentcommonexperiencelevel_Level>;
  numericLevel?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ContentReleasesRelease = {
  __typename?: 'ContentReleasesRelease';
  actions?: Maybe<ContentReleasesReleaseActionRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  releasedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentReleasesReleaseAction = {
  __typename?: 'ContentReleasesReleaseAction';
  contentType: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entry?: Maybe<GenericMorph>;
  locale?: Maybe<Scalars['String']['output']>;
  release?: Maybe<ContentReleasesReleaseEntityResponse>;
  type: Enum_Contentreleasesreleaseaction_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ContentReleasesReleaseActionEntity = {
  __typename?: 'ContentReleasesReleaseActionEntity';
  attributes?: Maybe<ContentReleasesReleaseAction>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseActionEntityResponse = {
  __typename?: 'ContentReleasesReleaseActionEntityResponse';
  data?: Maybe<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseActionEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionEntityResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  contentType?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseActionFiltersInput>>>;
  release?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseActionInput = {
  contentType?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  release?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<Enum_Contentreleasesreleaseaction_Type>;
};

export type ContentReleasesReleaseActionRelationResponseCollection = {
  __typename?: 'ContentReleasesReleaseActionRelationResponseCollection';
  data: Array<ContentReleasesReleaseActionEntity>;
};

export type ContentReleasesReleaseEntity = {
  __typename?: 'ContentReleasesReleaseEntity';
  attributes?: Maybe<ContentReleasesRelease>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ContentReleasesReleaseEntityResponse = {
  __typename?: 'ContentReleasesReleaseEntityResponse';
  data?: Maybe<ContentReleasesReleaseEntity>;
};

export type ContentReleasesReleaseEntityResponseCollection = {
  __typename?: 'ContentReleasesReleaseEntityResponseCollection';
  data: Array<ContentReleasesReleaseEntity>;
  meta: ResponseCollectionMeta;
};

export type ContentReleasesReleaseFiltersInput = {
  actions?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ContentReleasesReleaseFiltersInput>>>;
  releasedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ContentReleasesReleaseInput = {
  actions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  releasedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Componentcommonexperiencelevel_Level {
  Advanced = 'Advanced',
  Beginner = 'Beginner',
  Elementary = 'Elementary',
  Expert = 'Expert',
  Intermediate = 'Intermediate'
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Contentreleasesreleaseaction_Type {
  Publish = 'publish',
  Unpublish = 'unpublish'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = ComponentCommonContact | ComponentCommonExperienceLevel | ComponentSharedMetaSocial | ComponentSharedSeo | ContentReleasesRelease | ContentReleasesReleaseAction | HomePage | I18NLocale | Job | Preambula | Project | Resume | SelfProject | Skill | SkillCategory | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type HomePage = {
  __typename?: 'HomePage';
  about: Scalars['String']['output'];
  contact: ComponentCommonContact;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  introduction: Scalars['String']['output'];
  profilePicture: UploadFileEntityResponse;
  profilePictures: UploadFileRelationResponseCollection;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo: ComponentSharedSeo;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type HomePageProfilePicturesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  contact?: InputMaybe<ComponentCommonContactInput>;
  introduction?: InputMaybe<Scalars['String']['input']>;
  profilePicture?: InputMaybe<Scalars['ID']['input']>;
  profilePictures?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Job = {
  __typename?: 'Job';
  companyName: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  projects?: Maybe<ProjectRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  startDate: Scalars['Date']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type JobProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type JobEntity = {
  __typename?: 'JobEntity';
  attributes?: Maybe<Job>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type JobEntityResponse = {
  __typename?: 'JobEntityResponse';
  data?: Maybe<JobEntity>;
};

export type JobEntityResponseCollection = {
  __typename?: 'JobEntityResponseCollection';
  data: Array<JobEntity>;
  meta: ResponseCollectionMeta;
};

export type JobFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  companyName?: InputMaybe<StringFilterInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<JobFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<JobFiltersInput>>>;
  projects?: InputMaybe<ProjectFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type JobInput = {
  companyName?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  projects?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  createContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  createJob?: Maybe<JobEntityResponse>;
  createProject?: Maybe<ProjectEntityResponse>;
  createSelfProject?: Maybe<SelfProjectEntityResponse>;
  createSkill?: Maybe<SkillEntityResponse>;
  createSkillCategory?: Maybe<SkillCategoryEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  deleteContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteJob?: Maybe<JobEntityResponse>;
  deletePreambula?: Maybe<PreambulaEntityResponse>;
  deleteProject?: Maybe<ProjectEntityResponse>;
  deleteResume?: Maybe<ResumeEntityResponse>;
  deleteSelfProject?: Maybe<SelfProjectEntityResponse>;
  deleteSkill?: Maybe<SkillEntityResponse>;
  deleteSkillCategory?: Maybe<SkillCategoryEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateContentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  updateContentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateJob?: Maybe<JobEntityResponse>;
  updatePreambula?: Maybe<PreambulaEntityResponse>;
  updateProject?: Maybe<ProjectEntityResponse>;
  updateResume?: Maybe<ResumeEntityResponse>;
  updateSelfProject?: Maybe<SelfProjectEntityResponse>;
  updateSkill?: Maybe<SkillEntityResponse>;
  updateSkillCategory?: Maybe<SkillCategoryEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
};


export type MutationCreateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
};


export type MutationCreateJobArgs = {
  data: JobInput;
};


export type MutationCreateProjectArgs = {
  data: ProjectInput;
};


export type MutationCreateSelfProjectArgs = {
  data: SelfProjectInput;
};


export type MutationCreateSkillArgs = {
  data: SkillInput;
};


export type MutationCreateSkillCategoryArgs = {
  data: SkillCategoryInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteContentReleasesReleaseArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteContentReleasesReleaseActionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteJobArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSelfProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSkillCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateContentReleasesReleaseArgs = {
  data: ContentReleasesReleaseInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateContentReleasesReleaseActionArgs = {
  data: ContentReleasesReleaseActionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateJobArgs = {
  data: JobInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePreambulaArgs = {
  data: PreambulaInput;
};


export type MutationUpdateProjectArgs = {
  data: ProjectInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateResumeArgs = {
  data: ResumeInput;
};


export type MutationUpdateSelfProjectArgs = {
  data: SelfProjectInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSkillArgs = {
  data: SkillInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSkillCategoryArgs = {
  data: SkillCategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Preambula = {
  __typename?: 'Preambula';
  contact: ComponentCommonContact;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  image: UploadFileEntityResponse;
  intro?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo: ComponentSharedSeo;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PreambulaEntity = {
  __typename?: 'PreambulaEntity';
  attributes?: Maybe<Preambula>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PreambulaEntityResponse = {
  __typename?: 'PreambulaEntityResponse';
  data?: Maybe<PreambulaEntity>;
};

export type PreambulaInput = {
  contact?: InputMaybe<ComponentCommonContactInput>;
  image?: InputMaybe<Scalars['ID']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
};

export type Project = {
  __typename?: 'Project';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  job?: Maybe<JobEntityResponse>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  startDate: Scalars['Date']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectEntity = {
  __typename?: 'ProjectEntity';
  attributes?: Maybe<Project>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProjectEntityResponse = {
  __typename?: 'ProjectEntityResponse';
  data?: Maybe<ProjectEntity>;
};

export type ProjectEntityResponseCollection = {
  __typename?: 'ProjectEntityResponseCollection';
  data: Array<ProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type ProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  endDate?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  job?: InputMaybe<JobFiltersInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProjectFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  startDate?: InputMaybe<DateFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProjectInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  job?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
};

export type ProjectRelationResponseCollection = {
  __typename?: 'ProjectRelationResponseCollection';
  data: Array<ProjectEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  contentReleasesRelease?: Maybe<ContentReleasesReleaseEntityResponse>;
  contentReleasesReleaseAction?: Maybe<ContentReleasesReleaseActionEntityResponse>;
  contentReleasesReleaseActions?: Maybe<ContentReleasesReleaseActionEntityResponseCollection>;
  contentReleasesReleases?: Maybe<ContentReleasesReleaseEntityResponseCollection>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  job?: Maybe<JobEntityResponse>;
  jobs?: Maybe<JobEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  preambula?: Maybe<PreambulaEntityResponse>;
  project?: Maybe<ProjectEntityResponse>;
  projects?: Maybe<ProjectEntityResponseCollection>;
  resume?: Maybe<ResumeEntityResponse>;
  selfProject?: Maybe<SelfProjectEntityResponse>;
  selfProjects?: Maybe<SelfProjectEntityResponseCollection>;
  skill?: Maybe<SkillEntityResponse>;
  skillCategories?: Maybe<SkillCategoryEntityResponseCollection>;
  skillCategory?: Maybe<SkillCategoryEntityResponse>;
  skills?: Maybe<SkillEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryContentReleasesReleaseArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryContentReleasesReleaseActionsArgs = {
  filters?: InputMaybe<ContentReleasesReleaseActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContentReleasesReleasesArgs = {
  filters?: InputMaybe<ContentReleasesReleaseFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHomePageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryJobArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryJobsArgs = {
  filters?: InputMaybe<JobFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPreambulaArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryResumeArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QuerySelfProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySelfProjectsArgs = {
  filters?: InputMaybe<SelfProjectFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySkillArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySkillCategoriesArgs = {
  filters?: InputMaybe<SkillCategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySkillCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Resume = {
  __typename?: 'Resume';
  about: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  images: UploadFileRelationResponseCollection;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ResumeImagesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResumeEntity = {
  __typename?: 'ResumeEntity';
  attributes?: Maybe<Resume>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ResumeEntityResponse = {
  __typename?: 'ResumeEntityResponse';
  data?: Maybe<ResumeEntity>;
};

export type ResumeInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type SelfProject = {
  __typename?: 'SelfProject';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  githubUrl?: Maybe<Scalars['String']['output']>;
  image: UploadFileEntityResponse;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type SelfProjectEntity = {
  __typename?: 'SelfProjectEntity';
  attributes?: Maybe<SelfProject>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SelfProjectEntityResponse = {
  __typename?: 'SelfProjectEntityResponse';
  data?: Maybe<SelfProjectEntity>;
};

export type SelfProjectEntityResponseCollection = {
  __typename?: 'SelfProjectEntityResponseCollection';
  data: Array<SelfProjectEntity>;
  meta: ResponseCollectionMeta;
};

export type SelfProjectFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SelfProjectFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  githubUrl?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SelfProjectFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SelfProjectFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  websiteUrl?: InputMaybe<StringFilterInput>;
};

export type SelfProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  githubUrl?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  websiteUrl?: InputMaybe<Scalars['String']['input']>;
};

export type Skill = {
  __typename?: 'Skill';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  experienceLevel: ComponentCommonExperienceLevel;
  icon: UploadFileEntityResponse;
  isFavourite: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  skill_category?: Maybe<SkillCategoryEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SkillCategory = {
  __typename?: 'SkillCategory';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon: UploadFileRelationResponseCollection;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  skills?: Maybe<SkillRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SkillCategoryIconArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type SkillCategorySkillsArgs = {
  filters?: InputMaybe<SkillFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SkillCategoryEntity = {
  __typename?: 'SkillCategoryEntity';
  attributes?: Maybe<SkillCategory>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SkillCategoryEntityResponse = {
  __typename?: 'SkillCategoryEntityResponse';
  data?: Maybe<SkillCategoryEntity>;
};

export type SkillCategoryEntityResponseCollection = {
  __typename?: 'SkillCategoryEntityResponseCollection';
  data: Array<SkillCategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type SkillCategoryFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SkillCategoryFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SkillCategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SkillCategoryFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  skills?: InputMaybe<SkillFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SkillCategoryInput = {
  icon?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type SkillEntity = {
  __typename?: 'SkillEntity';
  attributes?: Maybe<Skill>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SkillEntityResponse = {
  __typename?: 'SkillEntityResponse';
  data?: Maybe<SkillEntity>;
};

export type SkillEntityResponseCollection = {
  __typename?: 'SkillEntityResponseCollection';
  data: Array<SkillEntity>;
  meta: ResponseCollectionMeta;
};

export type SkillFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  experienceLevel?: InputMaybe<ComponentCommonExperienceLevelFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  isFavourite?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SkillFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SkillFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  skill_category?: InputMaybe<SkillCategoryFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SkillInput = {
  experienceLevel?: InputMaybe<ComponentCommonExperienceLevelInput>;
  icon?: InputMaybe<Scalars['ID']['input']>;
  isFavourite?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  skill_category?: InputMaybe<Scalars['ID']['input']>;
};

export type SkillRelationResponseCollection = {
  __typename?: 'SkillRelationResponseCollection';
  data: Array<SkillEntity>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};


export const SeoDocument = gql`
    query SEO {
  homePage {
    data {
      attributes {
        seo {
          id
          metaTitle
          metaDescription
          metaImage {
            data {
              id
              attributes {
                name
                alternativeText
                caption
                width
                height
                formats
                hash
                ext
                mime
                size
                url
                previewUrl
                provider
                provider_metadata
              }
            }
          }
          metaSocial {
            id
            socialNetwork
            title
            description
            image {
              data {
                id
                attributes {
                  name
                  alternativeText
                  caption
                  width
                  height
                  formats
                  hash
                  ext
                  mime
                  size
                  url
                  previewUrl
                  provider
                  provider_metadata
                }
              }
            }
          }
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
        }
      }
    }
  }
}
    `;

/**
 * __useSeoQuery__
 *
 * To run a query within a React component, call `useSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeoQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeoQuery(baseOptions?: Apollo.QueryHookOptions<SeoQuery, SeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeoQuery, SeoQueryVariables>(SeoDocument, options);
      }
export function useSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeoQuery, SeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeoQuery, SeoQueryVariables>(SeoDocument, options);
        }
export function useSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SeoQuery, SeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SeoQuery, SeoQueryVariables>(SeoDocument, options);
        }
export type SeoQueryHookResult = ReturnType<typeof useSeoQuery>;
export type SeoLazyQueryHookResult = ReturnType<typeof useSeoLazyQuery>;
export type SeoSuspenseQueryHookResult = ReturnType<typeof useSeoSuspenseQuery>;
export type SeoQueryResult = Apollo.QueryResult<SeoQuery, SeoQueryVariables>;
export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', seo: { __typename?: 'ComponentSharedSeo', id: string, metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', id: string, socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null } | null } | null } | null> | null } } | null } | null } | null };

export const namedOperations = {
  Query: {
    SEO: 'SEO'
  }
}

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const Enum_Componentcommonexperiencelevel_LevelSchema = z.nativeEnum(Enum_Componentcommonexperiencelevel_Level);

export const Enum_Componentsharedmetasocial_SocialnetworkSchema = z.nativeEnum(Enum_Componentsharedmetasocial_Socialnetwork);

export const Enum_Contentreleasesreleaseaction_TypeSchema = z.nativeEnum(Enum_Contentreleasesreleaseaction_Type);

export const PublicationStateSchema = z.nativeEnum(PublicationState);

export function BooleanFilterInputSchema(): z.ZodObject<Properties<BooleanFilterInput>> {
  return z.object({
    and: z.array(z.boolean().nullable()).nullish(),
    between: z.array(z.boolean().nullable()).nullish(),
    contains: z.boolean().nullish(),
    containsi: z.boolean().nullish(),
    endsWith: z.boolean().nullish(),
    eq: z.boolean().nullish(),
    eqi: z.boolean().nullish(),
    gt: z.boolean().nullish(),
    gte: z.boolean().nullish(),
    in: z.array(z.boolean().nullable()).nullish(),
    lt: z.boolean().nullish(),
    lte: z.boolean().nullish(),
    ne: z.boolean().nullish(),
    nei: z.boolean().nullish(),
    not: z.lazy(() => BooleanFilterInputSchema().nullish()),
    notContains: z.boolean().nullish(),
    notContainsi: z.boolean().nullish(),
    notIn: z.array(z.boolean().nullable()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish(),
    or: z.array(z.boolean().nullable()).nullish(),
    startsWith: z.boolean().nullish()
  })
}

export function ComponentCommonContactInputSchema(): z.ZodObject<Properties<ComponentCommonContactInput>> {
  return z.object({
    email: z.string().nullish(),
    githubUrl: z.string().nullish(),
    id: z.string().nullish(),
    linkedinUrl: z.string().nullish()
  })
}

export function ComponentCommonExperienceLevelFiltersInputSchema(): z.ZodObject<Properties<ComponentCommonExperienceLevelFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => ComponentCommonExperienceLevelFiltersInputSchema().nullable())).nullish(),
    level: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => ComponentCommonExperienceLevelFiltersInputSchema().nullish()),
    numericLevel: z.lazy(() => IntFilterInputSchema().nullish()),
    or: z.array(z.lazy(() => ComponentCommonExperienceLevelFiltersInputSchema().nullable())).nullish()
  })
}

export function ComponentCommonExperienceLevelInputSchema(): z.ZodObject<Properties<ComponentCommonExperienceLevelInput>> {
  return z.object({
    id: z.string().nullish(),
    level: Enum_Componentcommonexperiencelevel_LevelSchema.nullish(),
    numericLevel: z.number().nullish()
  })
}

export function ComponentSharedMetaSocialFiltersInputSchema(): z.ZodObject<Properties<ComponentSharedMetaSocialFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => ComponentSharedMetaSocialFiltersInputSchema().nullable())).nullish(),
    description: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => ComponentSharedMetaSocialFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => ComponentSharedMetaSocialFiltersInputSchema().nullable())).nullish(),
    socialNetwork: z.lazy(() => StringFilterInputSchema().nullish()),
    title: z.lazy(() => StringFilterInputSchema().nullish())
  })
}

export function ComponentSharedMetaSocialInputSchema(): z.ZodObject<Properties<ComponentSharedMetaSocialInput>> {
  return z.object({
    description: z.string().nullish(),
    id: z.string().nullish(),
    image: z.string().nullish(),
    socialNetwork: Enum_Componentsharedmetasocial_SocialnetworkSchema.nullish(),
    title: z.string().nullish()
  })
}

export function ComponentSharedSeoInputSchema(): z.ZodObject<Properties<ComponentSharedSeoInput>> {
  return z.object({
    canonicalURL: z.string().nullish(),
    id: z.string().nullish(),
    keywords: z.string().nullish(),
    metaDescription: z.string().nullish(),
    metaImage: z.string().nullish(),
    metaRobots: z.string().nullish(),
    metaSocial: z.array(z.lazy(() => ComponentSharedMetaSocialInputSchema().nullable())).nullish(),
    metaTitle: z.string().nullish(),
    metaViewport: z.string().nullish(),
    structuredData: definedNonNullAnySchema.nullish()
  })
}

export function ContentReleasesReleaseActionFiltersInputSchema(): z.ZodObject<Properties<ContentReleasesReleaseActionFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => ContentReleasesReleaseActionFiltersInputSchema().nullable())).nullish(),
    contentType: z.lazy(() => StringFilterInputSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    locale: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => ContentReleasesReleaseActionFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => ContentReleasesReleaseActionFiltersInputSchema().nullable())).nullish(),
    release: z.lazy(() => ContentReleasesReleaseFiltersInputSchema().nullish()),
    type: z.lazy(() => StringFilterInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish())
  })
}

export function ContentReleasesReleaseActionInputSchema(): z.ZodObject<Properties<ContentReleasesReleaseActionInput>> {
  return z.object({
    contentType: z.string().nullish(),
    locale: z.string().nullish(),
    release: z.string().nullish(),
    type: Enum_Contentreleasesreleaseaction_TypeSchema.nullish()
  })
}

export function ContentReleasesReleaseFiltersInputSchema(): z.ZodObject<Properties<ContentReleasesReleaseFiltersInput>> {
  return z.object({
    actions: z.lazy(() => ContentReleasesReleaseActionFiltersInputSchema().nullish()),
    and: z.array(z.lazy(() => ContentReleasesReleaseFiltersInputSchema().nullable())).nullish(),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    name: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => ContentReleasesReleaseFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => ContentReleasesReleaseFiltersInputSchema().nullable())).nullish(),
    releasedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish())
  })
}

export function ContentReleasesReleaseInputSchema(): z.ZodObject<Properties<ContentReleasesReleaseInput>> {
  return z.object({
    actions: z.array(z.string().nullable()).nullish(),
    name: z.string().nullish(),
    releasedAt: definedNonNullAnySchema.nullish()
  })
}

export function DateFilterInputSchema(): z.ZodObject<Properties<DateFilterInput>> {
  return z.object({
    and: z.array(definedNonNullAnySchema.nullable()).nullish(),
    between: z.array(definedNonNullAnySchema.nullable()).nullish(),
    contains: definedNonNullAnySchema.nullish(),
    containsi: definedNonNullAnySchema.nullish(),
    endsWith: definedNonNullAnySchema.nullish(),
    eq: definedNonNullAnySchema.nullish(),
    eqi: definedNonNullAnySchema.nullish(),
    gt: definedNonNullAnySchema.nullish(),
    gte: definedNonNullAnySchema.nullish(),
    in: z.array(definedNonNullAnySchema.nullable()).nullish(),
    lt: definedNonNullAnySchema.nullish(),
    lte: definedNonNullAnySchema.nullish(),
    ne: definedNonNullAnySchema.nullish(),
    nei: definedNonNullAnySchema.nullish(),
    not: z.lazy(() => DateFilterInputSchema().nullish()),
    notContains: definedNonNullAnySchema.nullish(),
    notContainsi: definedNonNullAnySchema.nullish(),
    notIn: z.array(definedNonNullAnySchema.nullable()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish(),
    or: z.array(definedNonNullAnySchema.nullable()).nullish(),
    startsWith: definedNonNullAnySchema.nullish()
  })
}

export function DateTimeFilterInputSchema(): z.ZodObject<Properties<DateTimeFilterInput>> {
  return z.object({
    and: z.array(definedNonNullAnySchema.nullable()).nullish(),
    between: z.array(definedNonNullAnySchema.nullable()).nullish(),
    contains: definedNonNullAnySchema.nullish(),
    containsi: definedNonNullAnySchema.nullish(),
    endsWith: definedNonNullAnySchema.nullish(),
    eq: definedNonNullAnySchema.nullish(),
    eqi: definedNonNullAnySchema.nullish(),
    gt: definedNonNullAnySchema.nullish(),
    gte: definedNonNullAnySchema.nullish(),
    in: z.array(definedNonNullAnySchema.nullable()).nullish(),
    lt: definedNonNullAnySchema.nullish(),
    lte: definedNonNullAnySchema.nullish(),
    ne: definedNonNullAnySchema.nullish(),
    nei: definedNonNullAnySchema.nullish(),
    not: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    notContains: definedNonNullAnySchema.nullish(),
    notContainsi: definedNonNullAnySchema.nullish(),
    notIn: z.array(definedNonNullAnySchema.nullable()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish(),
    or: z.array(definedNonNullAnySchema.nullable()).nullish(),
    startsWith: definedNonNullAnySchema.nullish()
  })
}

export function FileInfoInputSchema(): z.ZodObject<Properties<FileInfoInput>> {
  return z.object({
    alternativeText: z.string().nullish(),
    caption: z.string().nullish(),
    name: z.string().nullish()
  })
}

export function FloatFilterInputSchema(): z.ZodObject<Properties<FloatFilterInput>> {
  return z.object({
    and: z.array(z.number().nullable()).nullish(),
    between: z.array(z.number().nullable()).nullish(),
    contains: z.number().nullish(),
    containsi: z.number().nullish(),
    endsWith: z.number().nullish(),
    eq: z.number().nullish(),
    eqi: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number().nullable()).nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    ne: z.number().nullish(),
    nei: z.number().nullish(),
    not: z.lazy(() => FloatFilterInputSchema().nullish()),
    notContains: z.number().nullish(),
    notContainsi: z.number().nullish(),
    notIn: z.array(z.number().nullable()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish(),
    or: z.array(z.number().nullable()).nullish(),
    startsWith: z.number().nullish()
  })
}

export function HomePageInputSchema(): z.ZodObject<Properties<HomePageInput>> {
  return z.object({
    about: z.string().nullish(),
    contact: z.lazy(() => ComponentCommonContactInputSchema().nullish()),
    introduction: z.string().nullish(),
    profilePicture: z.string().nullish(),
    profilePictures: z.array(z.string().nullable()).nullish(),
    publishedAt: definedNonNullAnySchema.nullish(),
    seo: z.lazy(() => ComponentSharedSeoInputSchema().nullish())
  })
}

export function I18NLocaleFiltersInputSchema(): z.ZodObject<Properties<I18NLocaleFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => I18NLocaleFiltersInputSchema().nullable())).nullish(),
    code: z.lazy(() => StringFilterInputSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    name: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => I18NLocaleFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => I18NLocaleFiltersInputSchema().nullable())).nullish(),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish())
  })
}

export function IdFilterInputSchema(): z.ZodObject<Properties<IdFilterInput>> {
  return z.object({
    and: z.array(z.string().nullable()).nullish(),
    between: z.array(z.string().nullable()).nullish(),
    contains: z.string().nullish(),
    containsi: z.string().nullish(),
    endsWith: z.string().nullish(),
    eq: z.string().nullish(),
    eqi: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string().nullable()).nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    ne: z.string().nullish(),
    nei: z.string().nullish(),
    not: z.lazy(() => IdFilterInputSchema().nullish()),
    notContains: z.string().nullish(),
    notContainsi: z.string().nullish(),
    notIn: z.array(z.string().nullable()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish(),
    or: z.array(z.string().nullable()).nullish(),
    startsWith: z.string().nullish()
  })
}

export function IntFilterInputSchema(): z.ZodObject<Properties<IntFilterInput>> {
  return z.object({
    and: z.array(z.number().nullable()).nullish(),
    between: z.array(z.number().nullable()).nullish(),
    contains: z.number().nullish(),
    containsi: z.number().nullish(),
    endsWith: z.number().nullish(),
    eq: z.number().nullish(),
    eqi: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number().nullable()).nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    ne: z.number().nullish(),
    nei: z.number().nullish(),
    not: z.lazy(() => IntFilterInputSchema().nullish()),
    notContains: z.number().nullish(),
    notContainsi: z.number().nullish(),
    notIn: z.array(z.number().nullable()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish(),
    or: z.array(z.number().nullable()).nullish(),
    startsWith: z.number().nullish()
  })
}

export function JsonFilterInputSchema(): z.ZodObject<Properties<JsonFilterInput>> {
  return z.object({
    and: z.array(definedNonNullAnySchema.nullable()).nullish(),
    between: z.array(definedNonNullAnySchema.nullable()).nullish(),
    contains: definedNonNullAnySchema.nullish(),
    containsi: definedNonNullAnySchema.nullish(),
    endsWith: definedNonNullAnySchema.nullish(),
    eq: definedNonNullAnySchema.nullish(),
    eqi: definedNonNullAnySchema.nullish(),
    gt: definedNonNullAnySchema.nullish(),
    gte: definedNonNullAnySchema.nullish(),
    in: z.array(definedNonNullAnySchema.nullable()).nullish(),
    lt: definedNonNullAnySchema.nullish(),
    lte: definedNonNullAnySchema.nullish(),
    ne: definedNonNullAnySchema.nullish(),
    nei: definedNonNullAnySchema.nullish(),
    not: z.lazy(() => JsonFilterInputSchema().nullish()),
    notContains: definedNonNullAnySchema.nullish(),
    notContainsi: definedNonNullAnySchema.nullish(),
    notIn: z.array(definedNonNullAnySchema.nullable()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish(),
    or: z.array(definedNonNullAnySchema.nullable()).nullish(),
    startsWith: definedNonNullAnySchema.nullish()
  })
}

export function JobFiltersInputSchema(): z.ZodObject<Properties<JobFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => JobFiltersInputSchema().nullable())).nullish(),
    companyName: z.lazy(() => StringFilterInputSchema().nullish()),
    content: z.lazy(() => StringFilterInputSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    endDate: z.lazy(() => DateFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    not: z.lazy(() => JobFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => JobFiltersInputSchema().nullable())).nullish(),
    projects: z.lazy(() => ProjectFiltersInputSchema().nullish()),
    publishedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    startDate: z.lazy(() => DateFilterInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish())
  })
}

export function JobInputSchema(): z.ZodObject<Properties<JobInput>> {
  return z.object({
    companyName: z.string().nullish(),
    content: z.string().nullish(),
    endDate: definedNonNullAnySchema.nullish(),
    projects: z.array(z.string().nullable()).nullish(),
    publishedAt: definedNonNullAnySchema.nullish(),
    startDate: definedNonNullAnySchema.nullish()
  })
}

export function PaginationArgSchema(): z.ZodObject<Properties<PaginationArg>> {
  return z.object({
    limit: z.number().nullish(),
    page: z.number().nullish(),
    pageSize: z.number().nullish(),
    start: z.number().nullish()
  })
}

export function PreambulaInputSchema(): z.ZodObject<Properties<PreambulaInput>> {
  return z.object({
    contact: z.lazy(() => ComponentCommonContactInputSchema().nullish()),
    image: z.string().nullish(),
    intro: z.string().nullish(),
    publishedAt: definedNonNullAnySchema.nullish(),
    seo: z.lazy(() => ComponentSharedSeoInputSchema().nullish())
  })
}

export function ProjectFiltersInputSchema(): z.ZodObject<Properties<ProjectFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => ProjectFiltersInputSchema().nullable())).nullish(),
    content: z.lazy(() => StringFilterInputSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    endDate: z.lazy(() => DateFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    job: z.lazy(() => JobFiltersInputSchema().nullish()),
    name: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => ProjectFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => ProjectFiltersInputSchema().nullable())).nullish(),
    publishedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    startDate: z.lazy(() => DateFilterInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish())
  })
}

export function ProjectInputSchema(): z.ZodObject<Properties<ProjectInput>> {
  return z.object({
    content: z.string().nullish(),
    endDate: definedNonNullAnySchema.nullish(),
    job: z.string().nullish(),
    name: z.string().nullish(),
    publishedAt: definedNonNullAnySchema.nullish(),
    startDate: definedNonNullAnySchema.nullish()
  })
}

export function ResumeInputSchema(): z.ZodObject<Properties<ResumeInput>> {
  return z.object({
    about: z.string().nullish(),
    images: z.array(z.string().nullable()).nullish(),
    publishedAt: definedNonNullAnySchema.nullish()
  })
}

export function SelfProjectFiltersInputSchema(): z.ZodObject<Properties<SelfProjectFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => SelfProjectFiltersInputSchema().nullable())).nullish(),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    description: z.lazy(() => StringFilterInputSchema().nullish()),
    githubUrl: z.lazy(() => StringFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    name: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => SelfProjectFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => SelfProjectFiltersInputSchema().nullable())).nullish(),
    publishedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    websiteUrl: z.lazy(() => StringFilterInputSchema().nullish())
  })
}

export function SelfProjectInputSchema(): z.ZodObject<Properties<SelfProjectInput>> {
  return z.object({
    description: z.string().nullish(),
    githubUrl: z.string().nullish(),
    image: z.string().nullish(),
    name: z.string().nullish(),
    publishedAt: definedNonNullAnySchema.nullish(),
    websiteUrl: z.string().nullish()
  })
}

export function SkillCategoryFiltersInputSchema(): z.ZodObject<Properties<SkillCategoryFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => SkillCategoryFiltersInputSchema().nullable())).nullish(),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    name: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => SkillCategoryFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => SkillCategoryFiltersInputSchema().nullable())).nullish(),
    publishedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    skills: z.lazy(() => SkillFiltersInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish())
  })
}

export function SkillCategoryInputSchema(): z.ZodObject<Properties<SkillCategoryInput>> {
  return z.object({
    icon: z.array(z.string().nullable()).nullish(),
    name: z.string().nullish(),
    publishedAt: definedNonNullAnySchema.nullish(),
    skills: z.array(z.string().nullable()).nullish()
  })
}

export function SkillFiltersInputSchema(): z.ZodObject<Properties<SkillFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => SkillFiltersInputSchema().nullable())).nullish(),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    experienceLevel: z.lazy(() => ComponentCommonExperienceLevelFiltersInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    isFavourite: z.lazy(() => BooleanFilterInputSchema().nullish()),
    name: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => SkillFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => SkillFiltersInputSchema().nullable())).nullish(),
    publishedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    skill_category: z.lazy(() => SkillCategoryFiltersInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish())
  })
}

export function SkillInputSchema(): z.ZodObject<Properties<SkillInput>> {
  return z.object({
    experienceLevel: z.lazy(() => ComponentCommonExperienceLevelInputSchema().nullish()),
    icon: z.string().nullish(),
    isFavourite: z.boolean().nullish(),
    name: z.string().nullish(),
    publishedAt: definedNonNullAnySchema.nullish(),
    skill_category: z.string().nullish()
  })
}

export function StringFilterInputSchema(): z.ZodObject<Properties<StringFilterInput>> {
  return z.object({
    and: z.array(z.string().nullable()).nullish(),
    between: z.array(z.string().nullable()).nullish(),
    contains: z.string().nullish(),
    containsi: z.string().nullish(),
    endsWith: z.string().nullish(),
    eq: z.string().nullish(),
    eqi: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string().nullable()).nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    ne: z.string().nullish(),
    nei: z.string().nullish(),
    not: z.lazy(() => StringFilterInputSchema().nullish()),
    notContains: z.string().nullish(),
    notContainsi: z.string().nullish(),
    notIn: z.array(z.string().nullable()).nullish(),
    notNull: z.boolean().nullish(),
    null: z.boolean().nullish(),
    or: z.array(z.string().nullable()).nullish(),
    startsWith: z.string().nullish()
  })
}

export function UploadFileFiltersInputSchema(): z.ZodObject<Properties<UploadFileFiltersInput>> {
  return z.object({
    alternativeText: z.lazy(() => StringFilterInputSchema().nullish()),
    and: z.array(z.lazy(() => UploadFileFiltersInputSchema().nullable())).nullish(),
    caption: z.lazy(() => StringFilterInputSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    ext: z.lazy(() => StringFilterInputSchema().nullish()),
    folder: z.lazy(() => UploadFolderFiltersInputSchema().nullish()),
    folderPath: z.lazy(() => StringFilterInputSchema().nullish()),
    formats: z.lazy(() => JsonFilterInputSchema().nullish()),
    hash: z.lazy(() => StringFilterInputSchema().nullish()),
    height: z.lazy(() => IntFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    mime: z.lazy(() => StringFilterInputSchema().nullish()),
    name: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => UploadFileFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => UploadFileFiltersInputSchema().nullable())).nullish(),
    previewUrl: z.lazy(() => StringFilterInputSchema().nullish()),
    provider: z.lazy(() => StringFilterInputSchema().nullish()),
    provider_metadata: z.lazy(() => JsonFilterInputSchema().nullish()),
    size: z.lazy(() => FloatFilterInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    url: z.lazy(() => StringFilterInputSchema().nullish()),
    width: z.lazy(() => IntFilterInputSchema().nullish())
  })
}

export function UploadFileInputSchema(): z.ZodObject<Properties<UploadFileInput>> {
  return z.object({
    alternativeText: z.string().nullish(),
    caption: z.string().nullish(),
    ext: z.string().nullish(),
    folder: z.string().nullish(),
    folderPath: z.string().nullish(),
    formats: definedNonNullAnySchema.nullish(),
    hash: z.string().nullish(),
    height: z.number().nullish(),
    mime: z.string().nullish(),
    name: z.string().nullish(),
    previewUrl: z.string().nullish(),
    provider: z.string().nullish(),
    provider_metadata: definedNonNullAnySchema.nullish(),
    size: z.number().nullish(),
    url: z.string().nullish(),
    width: z.number().nullish()
  })
}

export function UploadFolderFiltersInputSchema(): z.ZodObject<Properties<UploadFolderFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => UploadFolderFiltersInputSchema().nullable())).nullish(),
    children: z.lazy(() => UploadFolderFiltersInputSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    files: z.lazy(() => UploadFileFiltersInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    name: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => UploadFolderFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => UploadFolderFiltersInputSchema().nullable())).nullish(),
    parent: z.lazy(() => UploadFolderFiltersInputSchema().nullish()),
    path: z.lazy(() => StringFilterInputSchema().nullish()),
    pathId: z.lazy(() => IntFilterInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish())
  })
}

export function UploadFolderInputSchema(): z.ZodObject<Properties<UploadFolderInput>> {
  return z.object({
    children: z.array(z.string().nullable()).nullish(),
    files: z.array(z.string().nullable()).nullish(),
    name: z.string().nullish(),
    parent: z.string().nullish(),
    path: z.string().nullish(),
    pathId: z.number().nullish()
  })
}

export function UsersPermissionsLoginInputSchema(): z.ZodObject<Properties<UsersPermissionsLoginInput>> {
  return z.object({
    identifier: z.string(),
    password: z.string(),
    provider: z.string()
  })
}

export function UsersPermissionsPermissionFiltersInputSchema(): z.ZodObject<Properties<UsersPermissionsPermissionFiltersInput>> {
  return z.object({
    action: z.lazy(() => StringFilterInputSchema().nullish()),
    and: z.array(z.lazy(() => UsersPermissionsPermissionFiltersInputSchema().nullable())).nullish(),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    not: z.lazy(() => UsersPermissionsPermissionFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => UsersPermissionsPermissionFiltersInputSchema().nullable())).nullish(),
    role: z.lazy(() => UsersPermissionsRoleFiltersInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish())
  })
}

export function UsersPermissionsRegisterInputSchema(): z.ZodObject<Properties<UsersPermissionsRegisterInput>> {
  return z.object({
    email: z.string(),
    password: z.string(),
    username: z.string()
  })
}

export function UsersPermissionsRoleFiltersInputSchema(): z.ZodObject<Properties<UsersPermissionsRoleFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => UsersPermissionsRoleFiltersInputSchema().nullable())).nullish(),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    description: z.lazy(() => StringFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    name: z.lazy(() => StringFilterInputSchema().nullish()),
    not: z.lazy(() => UsersPermissionsRoleFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => UsersPermissionsRoleFiltersInputSchema().nullable())).nullish(),
    permissions: z.lazy(() => UsersPermissionsPermissionFiltersInputSchema().nullish()),
    type: z.lazy(() => StringFilterInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    users: z.lazy(() => UsersPermissionsUserFiltersInputSchema().nullish())
  })
}

export function UsersPermissionsRoleInputSchema(): z.ZodObject<Properties<UsersPermissionsRoleInput>> {
  return z.object({
    description: z.string().nullish(),
    name: z.string().nullish(),
    permissions: z.array(z.string().nullable()).nullish(),
    type: z.string().nullish(),
    users: z.array(z.string().nullable()).nullish()
  })
}

export function UsersPermissionsUserFiltersInputSchema(): z.ZodObject<Properties<UsersPermissionsUserFiltersInput>> {
  return z.object({
    and: z.array(z.lazy(() => UsersPermissionsUserFiltersInputSchema().nullable())).nullish(),
    blocked: z.lazy(() => BooleanFilterInputSchema().nullish()),
    confirmationToken: z.lazy(() => StringFilterInputSchema().nullish()),
    confirmed: z.lazy(() => BooleanFilterInputSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    email: z.lazy(() => StringFilterInputSchema().nullish()),
    id: z.lazy(() => IdFilterInputSchema().nullish()),
    not: z.lazy(() => UsersPermissionsUserFiltersInputSchema().nullish()),
    or: z.array(z.lazy(() => UsersPermissionsUserFiltersInputSchema().nullable())).nullish(),
    password: z.lazy(() => StringFilterInputSchema().nullish()),
    provider: z.lazy(() => StringFilterInputSchema().nullish()),
    resetPasswordToken: z.lazy(() => StringFilterInputSchema().nullish()),
    role: z.lazy(() => UsersPermissionsRoleFiltersInputSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterInputSchema().nullish()),
    username: z.lazy(() => StringFilterInputSchema().nullish())
  })
}

export function UsersPermissionsUserInputSchema(): z.ZodObject<Properties<UsersPermissionsUserInput>> {
  return z.object({
    blocked: z.boolean().nullish(),
    confirmationToken: z.string().nullish(),
    confirmed: z.boolean().nullish(),
    email: z.string().nullish(),
    password: z.string().nullish(),
    provider: z.string().nullish(),
    resetPasswordToken: z.string().nullish(),
    role: z.string().nullish(),
    username: z.string().nullish()
  })
}
