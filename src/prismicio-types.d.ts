// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomepageDocumentDataSlicesSlice = PfSlice;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * bio field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.bio
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bio: prismic.RichTextField;

  /**
   * skills field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.skills
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  skills: prismic.RichTextField;

  /**
   * label field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * follow field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.follow
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  follow: prismic.KeyTextField;

  /**
   * message field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.message
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  message: prismic.KeyTextField;

  /**
   * skill field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.skill
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill: prismic.KeyTextField;

  /**
   * locatie field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.locatie
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  locatie: prismic.KeyTextField;

  /**
   * zenit field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.zenit
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  zenit: prismic.ImageField<never>;

  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = HomepageDocument;

/**
 * Primary content in *Pf → Primary*
 */
export interface PfSliceDefaultPrimary {
  /**
   * Foto field in *Pf → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: pf.primary.foto
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto: prismic.ImageField<never>;
}

/**
 * Default variation for Pf Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PfSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PfSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Pf*
 */
type PfSliceVariation = PfSliceDefault;

/**
 * Pf Shared Slice
 *
 * - **API ID**: `pf`
 * - **Description**: Pf
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PfSlice = prismic.SharedSlice<"pf", PfSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      PfSlice,
      PfSliceDefaultPrimary,
      PfSliceVariation,
      PfSliceDefault,
    };
  }
}
