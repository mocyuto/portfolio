import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  fas,
  faFileAlt,
  faFilePowerpoint,
} from "@fortawesome/free-solid-svg-icons";

export function load(): void {
  library.add(
    fab,
    faGithub,
    faTwitter,
    faFacebook,
    fas,
    faFileAlt,
    faFilePowerpoint
  );
}
