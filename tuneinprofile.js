ar obj = JSON.parse($response.body);

obj =  

{
  "Header" : {
    "Title" : "Perfil"
  },
  "Item" : {
    "Subtitle" : "elzari",
    "IsDescriptionVisible" : true,
    "Actions" : {
      "Profile" : {
        "Url" : "https://api.radiotime.com/profiles/u143025943/follows?viewModel=true&serial=F0AA1C5D-0287-47F3-9DB6-F7C3F78A161A&partnerId=M2t9wS30&version=23.6&latlon=38.92234230993623%2c-5.831489291353051&device=phone&itemToken=BgUFAAAAAAAAAAAAAAAOF2eGCAEFDhdnhggOF2eGCA",
        "IsMyProfile" : true,
        "CanViewProfile" : true,
        "DestinationInfo" : {
          "SeoName" : "elzari",
          "Id" : "u143025943",
          "RequestType" : "Profile"
        }
      },
      "Share" : {
        "ShareUrl" : "http://tun.in/ujUqF7",
        "CanShareOnTwitter" : true,
        "ShareText" : "Echa un vistazo a Federico Fernandez en TuneIn",
        "CanShareOnFacebook" : true,
        "CanShare" : true
      },
      "Follow" : {
        "CanFollow" : false,
        "IsFollowing" : false,
        "FollowerCount" : 0,
        "GuideId" : "u143025943",
        "FollowText" : "0 Favoritos"
      }
    },
    "Index" : 0,
    "Context" : {
      "Token" : "BgUFAAAAAAAAAAAAAAAOF2eGCAEFDhdnhggOF2eGCA"
    },
    "GuideId" : "u143025943",
    "AccessibilityTitle" : "Federico Fernandez",
    "IsTitleVisible" : true,
    "Pivots" : {
      "Follows" : {
        "DisplayName" : "Siguiendo",
        "Url" : "https://api.radiotime.com/profiles/me/follows?serial=F0AA1C5D-0287-47F3-9DB6-F7C3F78A161A&partnerId=M2t9wS30&version=23.6&latlon=38.92234230993623%2c-5.831489291353051&device=phone&itemToken=BgUFAAAAAAAAAAAAAAAOF2eGCAEFDhdnhggOF2eGCA",
        "CountText" : "7",
        "RequiresAuth" : false,
        "Count" : 7
      },
      "FollowedBy" : {
        "DisplayName" : "Seguidores",
        "Url" : "https://api.radiotime.com/profiles/me/followedby?serial=F0AA1C5D-0287-47F3-9DB6-F7C3F78A161A&partnerId=M2t9wS30&version=23.6&latlon=38.92234230993623%2c-5.831489291353051&device=phone&itemToken=BgUFAAAAAAAAAAAAAAAOF2eGCAEFDhdnhggOF2eGCA",
        "CountText" : "0",
        "RequiresAuth" : false,
        "Count" : 0
      }
    },
    "Type" : "User",
    "Title" : "Federico Fernandez",
    "Properties" : {
      "Profile" : {
        "IsFollowingListPublic" : false,
        "IsProfileVerified" : false
      },
      "UserInfo" : {
        "SubscriptionKey" : "1753937468000",
        "Username" : "elzari",
        "IsRegisteredUser" : true,
        "IsVerifiedUser" : false,
        "SubscriptionStatus" : "true",
        "SubscriptionProviderId" : 3,
        "IsOnboarded" : true,
        "SubscriptionAccessRestricted" : false,
        "SubscriptionExpiresOn" : "2025-06-17T03:39:35",
        "Email" : "el_zari@hotmail.com",
        "SubscriptionProviderName" : "apple.free"
      },
      "SEOInfo" : {
        "GuideId" : "u143025943",
        "Title" : "elzari",
        "Path" : "radio"
      },
      "Logo" : {
        "IsCustom" : true
      }
    },
    "Image" : "http://cdn-profiles.tunein.com/u143025943/images/logoq.jpg?t=637814388000000000",
    "IsSubtitleVisible" : true,
    "Behaviors" : {
      "Default" : {
        "ActionName" : "Profile"
      }
    },
    "ContainerType" : "Undefined"
  },
  "Metadata" : {
    "Properties" : {
      "Ads" : {
        "AdEligible" : true
      }
    }
  }
}
$done({body: JSON.stringify(obj)});
