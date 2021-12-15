import AppPackage from "../../package.json";

export default class Profiles {
  // static readonly origin = 'http://172.19.1.200';
  static readonly origin = "http://127.0.0.1";
  static readonly port = "9002";
  static readonly pathname = "/graphql";
  static readonly uploadPathName = "/v2/file/upload";

  static readonly VERSION = AppPackage.version;

  static readonly fakerGraphql = `${this.origin}:${this.port}${this.pathname}`;
  static readonly rc = `http://172.19.1.157:29100/graphql`;
  static readonly wf = `http://172.19.1.16:9002/graphql`;
  static readonly wk = `http://172.19.1.20:29100/graphql`;
  static readonly lh = `http://172.19.1.18:29100/graphql`;
  static readonly kidal = "http://172.19.1.201:29100/graphql";
  static readonly nat = "http://n4fgt2.natappfree.cc";

  static readonly serverUrl = this.rc;
}
