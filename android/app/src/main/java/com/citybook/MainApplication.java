package citybook.cththemes.com;

import android.app.Application;
import com.brentvatne.react.ReactVideoPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.Arrays;
import java.util.List;
import com.airbnb.android.react.maps.MapsPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import com.horcrux.svg.SvgPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage; // <-- Add to ReactNativeI18n to the imports
import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;  // <--- Import Package
import com.geektime.rnonesignalandroid.ReactNativeOneSignalPackage;
import com.gettipsi.stripe.StripeReactPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new MapsPackage(),
          new VectorIconsPackage(),
          new ReactVideoPackage(),
          new LinearGradientPackage(),
          new LottiePackage(),
          new SvgPackage(),
          new RNI18nPackage(),
          new ReactNativePushNotificationPackage(),
          new ReactNativeOneSignalPackage(), // You must return the ReactNativeOneSignalPackage here
          new StripeReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
