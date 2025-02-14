"use client";

import { useEffect } from "react";
import { useCookies } from "react-cookie";

import {
  initGoogleAnalytics,
  UOC_COOKIE_CHOICES_CATEGORIES,
  SOCIAL_MARKETING_PREFERENCES,
} from "@ucam.uis.devops/ucam-observe-remote-analytics";

interface GoogleAnalyticsProps {
  googleAnalyticsId?: string;
}

export default function GoogleAnalytics({ googleAnalyticsId }: GoogleAnalyticsProps) {
  const [cookies] = useCookies([UOC_COOKIE_CHOICES_CATEGORIES]);

  useEffect(() => {
    try {
      if (
        cookies[UOC_COOKIE_CHOICES_CATEGORIES].includes(SOCIAL_MARKETING_PREFERENCES) &&
        googleAnalyticsId
      ) {
        initGoogleAnalytics(googleAnalyticsId ?? "");
      }
    } catch {
      // All exceptions are squashed.
    }
  }, [cookies, googleAnalyticsId]);

  return <></>;
}
