import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "9a4ervb1", // find this at manage.sanity.io or in your sanity.json
  dataset: "evnt",
  token:
    "skaN3TmXxrH2xoDCWKJPEBPM3eAGitaRrMFiYWcG0B5n3UB9eVIic3ShhS8tPHIYVGudH0NbDX3kJ9w8IYuyfmpBBnfh1XjtKBFUTcSU2Ztj6kotkFpZm17gWGGC3aX1U1jholyynerbsEuZ0GJBhxPNB5kdTjf1dc4DbQdQCqVO7dUma52M", // this is from those question during 'sanity init'
});
