module.exports = {
    development: {
      app: {
        name: 'Passport SAML strategy example',
        port: process.env.PORT || 3000
      },
      passport: {
        strategy: 'saml',
        saml: {
          path: process.env.SAML_PATH || '/login',
          entryPoint: process.env.SAML_ENTRY_POINT || 'https://ssoidp.mykademy.com//saml/saml2/idp/SSOService.php',
          issuer: 'jasim-localhost',
          cert: process.env.SAML_CERT || "MIIE0zCCAzugAwIBAgIUEkGSfug50dCaCY0K40aSAg3iC3QwDQYJKoZIhvcNAQELBQAweTELMAkGA1UEBhMCSU4xDzANBgNVBAgMBktlcmFsYTEQMA4GA1UEBwwHV2F5YW5hZDEhMB8GA1UECgwYSW50ZXJuZXQgV2lkZ2l0cyBQdHkgTHRkMSQwIgYJKoZIhvcNAQkBFhVqYXNpbS5wYUBteWthZGVteS5jb20wHhcNMjEwOTAyMDgzMDIwWhcNMzEwOTAyMDgzMDIwWjB5MQswCQYDVQQGEwJJTjEPMA0GA1UECAwGS2VyYWxhMRAwDgYDVQQHDAdXYXlhbmFkMSEwHwYDVQQKDBhJbnRlcm5ldCBXaWRnaXRzIFB0eSBMdGQxJDAiBgkqhkiG9w0BCQEWFWphc2ltLnBhQG15a2FkZW15LmNvbTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBALczqLAcF+YhA4w44Z39exDsJRVoc6S9+4kq3d1M91dv/bN6/odiNzvo4/CygAmAxsM9HH7kZCKUt9ZlnjlkSlN66fEPWyPikGJG3IPBrJ6bWzK3i1e3asNJLFggeicRVloQ81i8igKyaXcsbyFN12+5VKd/R2ChOOkCAB/bUBLehs0PTw6nvUnteeNMoh0mZLEM/lJrSOVkmhi4YRLRBSfZR8rC8zaPA9e+FnJ9bbEeqJdoykJZwqbtBGiDm8ahfjofZHfLxTwx+KGVJSI8VSh/QxlwWG/eG1BjlKi6E3R3Ept9lD/btM0gxLOPPf71xLAJt6Zrp0CGNhC27Db1+VWTLjNEW4gnCd4QnmiTLQixw1kR6GPNL/jY1meuwYyUyWCBA/Hbt8VEL+Eqex/O/OQ4XrAbc5vuAIoyUi6WCZ2eXUerplWYqQfeCvzTmoPoNWMCeVq90mXGAKcM4jJw0OLrD7XRhhTiGRWGbXoUmwingVYi6ztHmYrqboOKENe3bwIDAQABo1MwUTAdBgNVHQ4EFgQUBsFT+7Tt20x7zICKyw9W01Zl1YYwHwYDVR0jBBgwFoAUBsFT+7Tt20x7zICKyw9W01Zl1YYwDwYDVR0TAQH/BAUwAwEB/zANBgkqhkiG9w0BAQsFAAOCAYEAhZSNLJhcLu9xVbUP5Uc275RcC953pDmMA7yYOKrDfz62Cy5RW0tGCpKnh+t0tzTjdUewPghhHrRnoKniVJRjwLYSL4umK5apX47UU31swuXd0F1QmbORm1IvHcIUlFNMJ5YbEmQ99Q0JHnfOWztKFWjyYzB7fAiSBEgc1ktFw0rzfh1joM5JwMMkIBnlVd62oikL0ktHlNpZJ6SS/7cjHrrZGJP32WsjXykdVplojaueGZqqntDCWMAOlEZReDClBf3ujr4izixXZ4V6OB8rzLR53Fm+y0j7K9P98FpCOHq8L+yy63LnQ8EWzkxlmjhdH1XyH2E/+dBQn4QNuIKkmIO5HMhQN9tW+Df209BiaO50jrpJug3jp0GD6GmSskAZsb0M/Cy8x8j2zhRlRsSnQVXBWKBPH9CAm4EDrv8UQUEUHrGeabhquphOBH2NsQtJZsweByzeUSJB/faZBO/y2AFihHxLxxIdr24h940yWAaE6mvr72EH2FAkR1LYBA4M"
        }
      }
    }
  };