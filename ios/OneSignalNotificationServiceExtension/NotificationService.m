//
//  NotificationService.m
//  OneSignalNotificationServiceExtension
//
//  Created by DEV1 on 1/3/19.
//  Copyright © 2019 Facebook. All rights reserved.
//
#import <RCTOneSignalExtensionService.h>
#import "NotificationService.h"

@interface NotificationService ()

@property (nonatomic, strong) void (^contentHandler)(UNNotificationContent *contentToDeliver);
@property (nonatomic, strong) UNNotificationRequest *receivedRequest;
@property (nonatomic, strong) UNMutableNotificationContent *bestAttemptContent;

@end

@implementation NotificationService

- (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
    self.receivedRequest = request;
    self.contentHandler = contentHandler;
    self.bestAttemptContent = [request.content mutableCopy];
    [RCTOneSignalExtensionService didReceiveNotificationRequest:self.receivedRequest withContent:self.bestAttemptContent];
//    // Modify the notification content here...
//    self.bestAttemptContent.title = [NSString stringWithFormat:@"%@ [modified]", self.bestAttemptContent.title];
  
    self.contentHandler(self.bestAttemptContent);
}

- (void)serviceExtensionTimeWillExpire {
    // Called just before the extension will be terminated by the system.
    // Use this as an opportunity to deliver your "best attempt" at modified content, otherwise the original push payload will be used.
  [RCTOneSignalExtensionService serviceExtensionTimeWillExpireRequest:self.receivedRequest withMutableNotificationContent:self.bestAttemptContent];
    self.contentHandler(self.bestAttemptContent);
}

@end
